export * from './type'
import * as validations from './validation'
import { RegExpRaw, RegExpUnit } from './type'

function regExpMatch(str: string, charCodeReg, regExpUnit: RegExpUnit) {
	const item: RegExpUnit = regExpUnit

	let itemRule: RegExpRaw = {
		min: undefined,
		max: undefined,
		reg: charCodeReg
	}

	if (typeof item === "string") {
		if (Object.keys(validations).includes(item) || item === 'length') {
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


export function RegExps(regExpUnits: RegExpUnit[] | RegExpUnit, charCodeReg = /[0-9a-zA-Z_]/): (str: string) => boolean {

	return function (str: string): boolean {
		let len = 1;
		if (Array.isArray(regExpUnits)) {
			len = regExpUnits.length
		} else {
			return regExpMatch(str, charCodeReg, regExpUnits)
		}

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