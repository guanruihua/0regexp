import * as validations from './validation'
import { RTypeBase, RTypeRegExp } from './type'

export default function rRegExp(rTypes: RTypeRegExp[], charCodeReg: RegExp = /[0-9a-zA-Z_]/): (str: string) => boolean {
	return function (str: string): boolean {
		let len = rTypes.length
		while (len--) {
			const item: RTypeRegExp = rTypes[len]
			let itemRule: RTypeBase = {
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
		}
		return true
	}
}
