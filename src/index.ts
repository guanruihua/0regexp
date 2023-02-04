export * from './type'
export * from './Regular'
export * from './dictionary'
import * as validations from './validation'
import { RegExpRaw, RegExpUnit } from './type'

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
