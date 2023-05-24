import { Regular } from '../dictionary'
import { RuleErrorMonitor } from '../error'
import { Rule, RuleName } from '../type'
import * as Validation from '../validation'
import { lengthRule, enumRule, } from '../validation'
import { isArray, isEmpty, isObject, isRegExp, isString, isUndefined } from 'asura-eye'

export async function RegExps(rules: (Rule | RuleName)[], value: unknown) {

	const result = {
		success: [],
		error: [],
		warnning: [],
	}

	const count = (status: boolean, rule: Rule | RuleName) => {
		const { warningOnly = false } = isString(rule) ? {} : rule
		if (status === false && warningOnly) return result.warnning.push(rule)
		if (status) return result.success.push(rule)
		return result.error.push(rule)
	}

	for (let i = 0; i < rules.length; i++) {

		const ruleUnit = rules[i]

		// 规则为string 的处理
		if (isString(ruleUnit)) {
			if (Validation[ruleUnit]) {
				try {
					if (Validation[ruleUnit](value, ruleUnit) === false) {
						count(false, ruleUnit)
						continue;
					}
				} catch (error) {
					console.error(error)
				}

			}
			const reg = Regular[ruleUnit]
			if (isRegExp(reg) && isString(value)) {
				count(reg.test(value), ruleUnit)
			} else {
				count(false, ruleUnit)
			}
			continue;
		}



		const {
			name,
			type, transform,
			required = false, whitespace = false,
			validator
		} = ruleUnit

		RuleErrorMonitor(ruleUnit)

		const newValue = isUndefined(transform) ? value : transform(value)

		let unitResult = true

		if (!lengthRule(newValue, ruleUnit)) {
			count(false, ruleUnit)
			continue;
		}

		if (required && (isEmpty(newValue) || newValue === '')) {
			count(false, ruleUnit)
			continue;
		}

		if (validator) {
			count(await validator(newValue, ruleUnit), ruleUnit)
			continue;
		}

		if (isEmpty(type)) {
			count(true, ruleUnit)
			continue;
		}


		// name 的处理
		if (type) {
			if (Validation[name]) {
				try {
					if (Validation[name](value, ruleUnit) === false) {
						count(false, ruleUnit)
						continue;
					}
				} catch (error) {
					console.error(error)
				}

			}
			const reg = Regular[name]
			if (isRegExp(reg) && isString(value)) {
				count(reg.test(value), ruleUnit)
			}
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
						const tmp = await RegExps(
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
						const tmp = await RegExps(
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