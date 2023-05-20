export * from './type'
export * from './Regular'
export * from './dictionary'
import * as validations from './validation'
import { isArray, isEmpty, isObject, isRegExp, isString, isUndefined } from 'asura-eye'
import { RegExpRaw, RegExpUnit, Rule } from './type'
import { lengthRule } from './base'
import { enumRule } from 'base/enum'

function regExpMatch(str: string, charCodeReg: RegExp, regExpUnit: RegExpUnit) {

	const item: RegExpUnit = regExpUnit

	let itemRule: RegExpRaw = {
		min: undefined,
		max: undefined,
		reg: charCodeReg
	}

	if (typeof item === "string") {
		if (validations[item] || item === 'length') {
			itemRule.type = item
		}
	} else {
		itemRule = { ...itemRule, ...item }
	}

	if (itemRule.type
		&& itemRule.type === 'length'
		&& !validations['_length_'](str, itemRule)) {
		return false
	}

	if (itemRule.type
		&& validations[itemRule.type]
		&& !validations[itemRule.type](str, itemRule)) {
		return false;
	}

	if (!itemRule.type && itemRule.reg) {
		if (!new RegExp(itemRule.reg).test(str)) {
			return false
		}
	}

	return true
}

/**
 * 
 * @param regExpUnits 规则索引
 * @param charCodeReg 
 * @returns 
 */
export function RegExps(regExpUnits: RegExpUnit[] | RegExpUnit, charCodeReg = /[0-9a-zA-Z_]/): (str: string) => boolean {

	if (!Array.isArray(regExpUnits)) {
		return function (str: string): boolean {
			return regExpMatch(str, charCodeReg, regExpUnits)
		}
	}

	return function (str: string): boolean {
		let len = regExpUnits.length;

		while (len--) {
			if (!regExpMatch(str, charCodeReg, regExpUnits[len])) {
				return false
			}
		}
		return true
	}
}


export function RegExpCount(regExpUnits: RegExpUnit[] | RegExpUnit, flag = false, charCodeReg = /[0-9a-zA-Z_]/) {

	return function (str: string): RegExpUnit[] {
		let len = 1;
		const result: RegExpUnit[] = []
		if (Array.isArray(regExpUnits)) {
			len = regExpUnits.length
		} else {
			regExpUnits = [regExpUnits]
		}

		while (len--) {
			if (regExpMatch(str, charCodeReg, regExpUnits[len]) === flag) {
				result.push(regExpUnits[len])
			}
		}
		return result
	}
}

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