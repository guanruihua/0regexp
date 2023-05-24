import { Rule } from '../type'
import { getLength } from './util'

// 连续字母
export function SeriesLetter(str: string, rule: Rule): boolean {
	const { max }: Rule = rule
	const _max = getLength(max, 4)
	let maxLen = 0
	let len = str.length
	while (len--) {
		if (new RegExp(/[a-zA-Z]/).test(str[len])) {
			maxLen++
		} else {
			maxLen = 0;
		}
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续有序字母
export function SeriesOrderLetter(str: string, rule: Rule): boolean {
	const { max }: Rule = rule
	const _max = getLength(max, 4)
	let maxLen = 0
	let nowChar = -1000
	let orderBy = 0;
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)

		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxLen = 0
			nowChar = item.charCodeAt(0)
			continue;
		}

		if (
			((nowChar - 1) === item_num && orderBy === 1)
			|| ((nowChar + 1) === item_num && orderBy === 2)) {
			maxLen++;
		}

		if ((nowChar + 1) === item_num && orderBy !== 2) {
			orderBy = 2
			maxLen = 2
		}

		if ((nowChar - 1) === item_num && orderBy !== 1) {
			orderBy = 1
			maxLen = 2
		}

		nowChar = item.charCodeAt(0)
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续字母(升序)
export function SeriesLetterAsc(str: string, rule: Rule): boolean {
	const { max = 4 }: Rule = rule
	const _max = getLength(max, 4)

	let maxLen = 0
	let nowChar = 'z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxLen = 0
			nowChar = 'z'
			continue;
		}
		if ((nowChar.charCodeAt(0) - 1) !== item_num) {
			maxLen = 1
		} else {
			maxLen++;
		}

		nowChar = item
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续字母(降序)
export function SeriesLetterDesc(str: string, rule: Rule): boolean {
	const { max = 4 }: Rule = rule
	const _max = getLength(max, 4)

	let maxLen = 0
	let nowChar = 'z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxLen = 0
			nowChar = 'z'
			continue;
		}
		if ((nowChar.charCodeAt(0) + 1) !== item_num) {
			maxLen = 1
		} else {
			maxLen++;
		}

		nowChar = item
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续字母(忽略大小写, 有序)
export function SeriesLetterIgCase(str: string, rule: Rule): boolean {
	const { max = 4 }: Rule = rule
	const _max = getLength(max, 4)

	let maxLen = 0
	let nowChar = -1000
	let orderBy = 0;
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)

		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxLen = 0
			nowChar = item.toUpperCase().charCodeAt(0)
			continue;
		}

		if (
			((nowChar - 1) === item_num && orderBy === 1)
			|| ((nowChar + 1) === item_num && orderBy === 2)) {
			maxLen++;
		}

		if ((nowChar + 1) === item_num && orderBy !== 2) {
			orderBy = 2
			maxLen = 2
		}

		if ((nowChar - 1) === item_num && orderBy !== 1) {
			orderBy = 1
			maxLen = 2
		}

		nowChar = item.toUpperCase().charCodeAt(0)

		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续字母(忽略大小写, 升序)
export function SeriesLetterIgCaseAsc(str: string, rule: Rule): boolean {
	const { max = 4 }: Rule = rule
	const _max = getLength(max, 4)

	let maxLen = 0
	let nowChar = 'Z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)
		if (item_num < 65 || item_num > 90) {
			maxLen = 0
			nowChar = 'Z'
			continue;
		}
		if ((nowChar.toUpperCase().charCodeAt(0) - 1) !== item_num) {
			maxLen = 1
		} else {
			maxLen++;
		}

		nowChar = item
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}

// 连续字母(忽略大小写, 降序)
export function LetterIgCaseDesc(str: string, rule: Rule): boolean {
	const { max = 4 }: Rule = rule
	const _max = getLength(max, 4)

	let maxLen = 0
	let nowChar = 'Z'
	const list = str.split('') || []
	let len = list.length
	while (len--) {
		const item: string = list[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)
		if (item_num < 65 || item_num > 90) {
			maxLen = 0
			nowChar = 'Z'
			continue;
		}
		if ((nowChar.toUpperCase().charCodeAt(0) + 1) !== item_num) {
			maxLen = 1
		} else {
			maxLen++;
		}

		nowChar = item
		if (maxLen >= _max) {
			return false
		}
	}
	return true
}