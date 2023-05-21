import { isArray, isString, isUndefined } from 'asura-eye';
import type { RegExpRaw, Rule } from '../type'

function getLength(value?: unknown, defaultValue?: number) {
	if (isString(value) || isArray(value)) return value.length
	if (isUndefined(value)) return defaultValue
	return value
}

/** 长度 */
export function lengthRule(value: unknown, rule: Rule): boolean {
	const { min, max, len }: Rule = rule
	
	const valueLen = getLength(value, 0)
	const minLen = getLength(min)
	const maxLen = getLength(max)
	const newLen = getLength(len)

	if (minLen !== undefined && minLen > valueLen) return false
	if (maxLen !== undefined && maxLen < valueLen) return false
	if (newLen !== undefined && newLen < valueLen) return false

	return true
}


/** 长度 */
export function _length_(str: string, rule: RegExpRaw): boolean {
	const { min = 4, max = 15 }: RegExpRaw = rule
	return str.length >= min && str.length < max;
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
