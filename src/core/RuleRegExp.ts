import { Rule } from '../type'
import { lengthRule, enumRule } from '../base'
import { isArray, isEmpty, isObject, isRegExp, isString, isUndefined } from 'asura-eye'

export async function RuleRegExp(rules: Rule[], value: unknown) {
	const result = {
		success: [],
		error: [],
		warnning: [],
	}

	const count = (status: boolean, rule: Rule) => {
		const { warningOnly = false } = rule
		if (status) return result.success.push(rule)
		if (warningOnly) return result.warnning.push(rule)
		return result.error.push(rule)
	}

	for (let i = 0; i < rules.length; i++) {

		const ruleUnit = rules[i]

		const {
			type = 'string', transform,
			required = false, whitespace = false,
			validator
		} = ruleUnit

		const newValue = isUndefined(transform) ? value : transform(value)

		let unitResult = false

		if (
			(required && isEmpty(newValue))
			|| !lengthRule(newValue, ruleUnit)
			|| !(validator && await validator(newValue, ruleUnit))
		) {
			count(false, ruleUnit)
			continue;
		}

		switch (type) {
			case 'string': {
				if (whitespace && /\s|\r/.test(newValue)) {
					count(false, ruleUnit)
					break;
				}
				break;
			}

			case 'number': {
				// unitResult = lengthRule(newValue, ruleUnit)
				break;
			}
			case 'enum': {
				unitResult = enumRule(newValue, ruleUnit)
				break;
			}

			case 'regexp': {
				const { pattern } = ruleUnit
				unitResult = isString(newValue)
					&& isRegExp(pattern)
					&& pattern.test(newValue)
				break;
			}

			case 'object': {
				const { objectRule } = ruleUnit
				if (isObject(objectRule) && isObject(newValue)) {
					let unitResultTmp = true
					for (const key in objectRule) {
						const tmp = await RuleRegExp(
							[objectRule[key]],
							newValue[key]
						)
						if (tmp.success.length !== 1) {
							unitResultTmp = false
							break;
						}
					}
					unitResult = unitResultTmp
				} else {
					unitResult = false
				}
				break;
			}
			case 'array': {
				const { arrayRule } = ruleUnit
				if (isArray(arrayRule) && isArray(newValue)) {
					let unitResultTmp = true
					for (let j = 0; j < arrayRule.length; j++) {
						const tmp = await RuleRegExp(
							[arrayRule[j]],
							j + 1 > arrayRule.length ? undefined : arrayRule[j]
						)
						if (tmp.success.length !== 1) {
							unitResultTmp = false
							break;
						}
					}
					unitResult = unitResultTmp
				} else {
					unitResult = false
				}
				break;
			}
		}

		count(unitResult, ruleUnit)
	}

	return result
}