import type { RegExpRaw, Rule } from '../type'
import { getLength } from './util'


/** 长度 */
export function lengthRule(value: unknown, rule: Rule): boolean {
	const { min, max, len } = rule

	const valueLen = getLength(value)
	const minLen = getLength(min)
	const maxLen = getLength(max)
	const newLen = getLength(len)

	if (min !== undefined && minLen > valueLen) return false
	if (max !== undefined && maxLen < valueLen) return false
	if (len !== undefined && newLen !== valueLen) return false

	return true
}

/* 字符数量 */
export function charCount(str: string, rule: RegExpRaw) {
	const { min = 4, max = 15, reg = /\*/ }: RegExpRaw = rule
	let len = str.length
	let countNum = 0
	while (len--) {
		if (new RegExp(reg).test(str)) {
			countNum++;
			continue;
		}
		if (countNum >= max) {
			return false
		}
	}
	return countNum >= min
}

/* 字符种类数量 */
export function typeCount(str: string, rule: RegExpRaw) {
	const { regs = [/[a-z]/, /[A-Z]/, /[0-9]/, /[_]/], min = 3, max = 15 } = rule
	let len = regs.length
	let countNum = 0
	while (len--) {
		if (new RegExp(regs[len]).test(str)) {
			countNum++;
			continue;
		}
		if (countNum >= max) {
			return false
		}
	}
	return countNum >= min
}
