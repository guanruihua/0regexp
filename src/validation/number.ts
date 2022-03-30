
/* 相邻数字数量 */
export function serialNumber(str: string, reg: RegExp, min = 0, max = 4) {
	let len = str.length
	let countNum = 0
	while (len--) {
		if (new RegExp(/[0-9]/).test(str[len])) {
			countNum++;
		} else {
			countNum = 0;
		}
		if (countNum >= max || countNum < min) {
			return false
		}
	}
	return true
}

/* 相邻有序数字 */
export function serialOrderNumber(str: string, reg: RegExp, min = 0, max = 4) {
	let len = str.length
	let countNum = 0
	let nowChar = '-2'
	let orderFlag = 0

	while (len--) {
		const item: string = str[len]
		const itemNum: number = Number(item)
		if (isNaN(itemNum)) {
			countNum = 0
			nowChar = '-2'
			orderFlag = 0
			continue;
		}

		if (Number(nowChar) - 1 === itemNum && orderFlag === 1) {
			countNum++
		}

		if (Number(nowChar) - 1 === itemNum && orderFlag !== 1) {
			orderFlag = 1
			countNum = 2
		}

		if (Number(nowChar) + 1 === itemNum && orderFlag === 2) {
			countNum++
		}

		if (Number(nowChar) + 1 === itemNum && orderFlag !== 2) {
			orderFlag = 2
			countNum = 2
		}

		if (countNum === 0) {
			countNum++
		}

		nowChar = item
		if (countNum >= max || countNum < min) {
			return false
		}
	}
	return true
}

/* 连续数字(升序) */
export function numbersAsc(str: string, reg: RegExp, min = -1, max = 4) {
	let len = str.length
	let countNum = 0
	let nowChar = '-2'
	while (len--) {
		const item: string = str[len]
		const itemNum: number = Number(item)
		if (isNaN(itemNum)) {
			countNum = 0
			nowChar = '-2'
			continue;
		}
		if (Number(nowChar) - 1 !== itemNum) {
			countNum = 1
		} else {
			countNum++;
		}
		nowChar = item
		if (countNum >= max || countNum < min) {
			return false
		}
	}
	return true
}

/* 连续数字(降序) */
export function numbersDesc(str: string, reg: RegExp, min = -1, max = 4) {
	let len = str.length
	let countNum = 0
	let nowChar = '-2'
	while (len--) {
		const item: string = str[len]
		const itemNum: number = Number(item)
		if (isNaN(itemNum)) {
			countNum = 0
			nowChar = '-2'
			continue;
		}
		if (Number(nowChar) + 1 !== itemNum) {
			countNum = 1
		} else {
			countNum++;
		}
		nowChar = item
		if (countNum >= max || countNum < min) {
			return false
		}
	}
	return true
}

