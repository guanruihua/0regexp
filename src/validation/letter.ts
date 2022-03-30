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
export function letters(str: string, rule: RTypeBase): boolean {
	const { max = 4 }: RTypeBase = rule
	let maxlen = 0
	let len = str.length
	while (len--) {
		if (new RegExp(/[a-zA-Z]/).test(str[len])) {
			maxlen++
		} else {
			maxlen = 0;
		}
		if (maxlen >= max) {
			return false
		}
	}
	return true
}

// 连续有序字母
export function serialLetters(str: string, rule: RTypeBase): boolean {
	const { max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = -1000
	let orderBy = 0;
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)

		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxlen = 0
			nowChar = item.charCodeAt(0)
			continue;
		}

		if (
			((nowChar - 1) === item_num && orderBy === 1)
			|| ((nowChar + 1) === item_num && orderBy === 2)) {
			maxlen++;
		}

		if ((nowChar + 1) === item_num && orderBy !== 2) {
			orderBy = 2
			maxlen = 2
		}

		if ((nowChar - 1) === item_num && orderBy !== 1) {
			orderBy = 1
			maxlen = 2
		}

		nowChar = item.charCodeAt(0)
		if (maxlen >= max) {
			return false
		}
	}
	return true
}

// 连续字母(升序)
export function serialLettersAsc(str: string, rule: RTypeBase): boolean {
	const { max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = 'z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
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
	const { max = 4 }: RTypeBase = rule

	let maxlen = 0
	let nowChar = 'z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.charCodeAt(0)
		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
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
// 连续字母(忽略大小写, 有序)
export function serialLettersIgnoreCase(str: string, rule: RTypeBase): boolean {
	const { max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = -1000
	let orderBy = 0;
	let len = str.length
	while (len--) {
		const item: string = str[len]
		const item_num: number = item.toUpperCase().charCodeAt(0)

		if (item_num < 65 || item_num > 122 || (item_num < 97 && item_num > 90)) {
			maxlen = 0
			nowChar = item.toUpperCase().charCodeAt(0)
			continue;
		}

		if (
			((nowChar - 1) === item_num && orderBy === 1)
			|| ((nowChar + 1) === item_num && orderBy === 2)) {
			maxlen++;
		}

		if ((nowChar + 1) === item_num && orderBy !== 2) {
			orderBy = 2
			maxlen = 2
		}

		if ((nowChar - 1) === item_num && orderBy !== 1) {
			orderBy = 1
			maxlen = 2
		}

		nowChar = item.toUpperCase().charCodeAt(0)

		if (maxlen >= max) {
			return false
		}
	}
	return true
}
// 连续字母(忽略大小写, 升序)
export function serialLettersIgnoreCaseAsc(str: string, rule: RTypeBase): boolean {
	const { max = 4 }: RTypeBase = rule
	let maxlen = 0
	let nowChar = 'Z'
	let len = str.length
	while (len--) {
		const item: string = str[len]
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
	const { max = 4 }: RTypeBase = rule
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