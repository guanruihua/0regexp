import { RTypeBase } from '../type'

/** 字母开头 */
export function letterBegin(str: string) {
	return new RegExp(/^[a-zA-Z]/).test(str)
}

/** 字母结尾 */
export function letterEnd(str: string) {
	return new RegExp(/[a-zA-Z]$/).test(str)
}

// 连续字母
export function serialLetters(str: string, rule: RTypeBase): boolean {
	const { min = 0, max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = 'z'
	const list = str.split('') || []
	let len = list.length
	while (len--) {
		const item: string = list[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 120 || (item_num < 97 && item_num > 90)) {
			maxlen = 0
			nowChar = 'z'
			continue;
		}
		if ((nowChar.charCodeAt(0) - 1) !== item_num) {
			maxlen = 1
		} else {
			maxlen++;
		}

		nowChar = item
		if (maxlen >= max) {
			return false
		}
	}
	return true
}
// 连续字母(降序)
export function serialLettersDesc(str: string, rule: RTypeBase): boolean {
	const { min = 0, max = 4 }: RTypeBase = rule

	let maxlen = 0
	let nowChar = 'z'
	const list = str.split('') || []
	let len = list.length
	while (len--) {
		const item: string = list[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 120 || (item_num < 97 && item_num > 90)) {
			maxlen = 0
			nowChar = 'z'
			continue;
		}
		if ((nowChar.charCodeAt(0) + 1) !== item_num) {
			maxlen = 1
		} else {
			maxlen++;
		}

		nowChar = item
		if (maxlen >= max) {
			return false
		}
	}
	return true
}
// 连续字母(忽略大小写)
export function serialLettersIgnoreCase(str: string, rule: RTypeBase): boolean {
	const { min = 0, max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = 'Z'
	const list = str.split('') || []
	let len = list.length
	while (len--) {
		const item: string = list[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)
		if (item_num < 65 || item_num > 90) {
			maxlen = 0
			nowChar = 'Z'
			continue;
		}
		if ((nowChar.toUpperCase().charCodeAt(0) - 1) !== item_num) {
			maxlen = 1
		} else {
			maxlen++;
		}

		nowChar = item
		if (maxlen >= max) {
			return false
		}
	}
	return true
}
// 连续字母(忽略大小写, 降序)
export function serialLettersIgnoreCaseDesc(str: string, rule: RTypeBase): boolean {
	const { min = 0, max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = 'Z'
	const list = str.split('') || []
	let len = list.length
	while (len--) {
		const item: string = list[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)
		if (item_num < 65 || item_num > 90) {
			maxlen = 0
			nowChar = 'Z'
			continue;
		}
		if ((nowChar.toUpperCase().charCodeAt(0) + 1) !== item_num) {
			maxlen = 1
		} else {
			maxlen++;
		}

		nowChar = item
		if (maxlen >= max) {
			return false
		}
	}
	return true
}