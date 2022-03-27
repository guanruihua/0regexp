const regMatch: {
	[key: string]: (str: string, min: number, max: number) => boolean
} = {
	'length': function (str: string, min: number, max: number): boolean {
		return str.length > min && str.length < max;
	},
	'letterBegin': function (str: string, min: number, max: number): boolean {
		return new RegExp(/^\w/).test(str)
	},
	'charCount': function (str: string, min: number, max: number): boolean {
		let maxlen = 0
		let nowChar = ''
		const list = str.split('') || []
		let len = list.length
		while (len--) {

			if (nowChar !== list[len]) {
				nowChar = list[len]
				maxlen = 1
			} else {
				maxlen++;
			}

			if (maxlen >= max) {
				return false
			}
		}
		return true
	},
	// 连续数字
	'serialNumbers': function (str: string, min: number, max: number): boolean {
		let maxlen = 0
		let nowChar = '-2'
		const list = str.split('') || []
		let len = list.length
		while (len--) {
			const item: string = list[len]
			const item_num: number = Number(item)
			if (isNaN(item_num)) {
				maxlen = 0
				nowChar = '-2'
				continue;
			}
			if ((Number(nowChar) - 1) !== item_num) {
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
	},
	// 连续数字(降序)
	'serialNumbersDesc': function (str: string, min: number, max: number): boolean {
		let maxlen = 0
		let nowChar = '-2'
		const list = str.split('') || []
		let len = list.length
		while (len--) {
			const item: string = list[len]
			const item_num: number = Number(item)
			if (isNaN(item_num)) {
				maxlen = 0
				nowChar = '-2'
				continue;
			}
			if ((Number(nowChar) + 1) !== item_num) {
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
	},
	// 连续字母
	'serialLetters': function (str: string, min: number, max: number): boolean {
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
	},
	// 连续字母(降序)
	'serialLettersDesc': function (str: string, min: number, max: number): boolean {
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
	},
	// 连续字母(忽略大小写)
	'serialLettersIgnoreCase': function (str: string, min: number, max: number): boolean {
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
	},
	// 连续字母(忽略大小写, 降序)
	'serialLettersIgnoreCaseDesc': function (str: string, min: number, max: number): boolean {
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
	},
	// 键盘连续(忽略大小写)
	'serialKeyboard': function (str: string, min: number, max: number): boolean {
		let keyborardMap = [
			['1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+'],
			['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{[', ']}', '\\|'],
			['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', '\'"'],
			['z', 'x', 'c', 'v', 'b', 'n', 'm', ',<', '.>', '/?']
		]
		// 获取字符在键盘的坐标
		function findIndex(_chart) {
			let x = -2
			let y = -2
			let _y = 4
			let _x = -2
			while (_y--) {
				_x = keyborardMap[_y].length
				while (_x--) {
					let item = keyborardMap[_y][_x].toLowerCase()
					let itemLen = item.length || 0
					if (_chart == item[0] || (itemLen > 1 && _chart == item[1])) {
						return [_x, _y]
					}
				}
			}
			return [x, y]
		}
		// 计算两坐标的升降序方向
		function calcIndex(x0, y0, x1, y1) {
			if (x0 < 0 || y0 < 0 || x1 < 0 || y1 < 0 || (x0 == x1 && y0 == y1)) {
				return 0
			}
			if (x0 == x1 && y0 == y1 + 1) {
				return 1
			}
			if (x0 + 1 == x1 && y0 == y1) {
				return 2
			}
			if (x0 == x1 && y0 + 1 == y1) {
				return 3
			}
			if (x0 == x1 + 1 && y0 == y1) {
				return 4
			}
			return 0
		}

		let total = 1
		let now_x = -2
		let now_y = -2
		let direction = 0 // 0: 未确定 1:y降序 2: x升序, 3: y升序; 4:x降序
		let len = str.length || 0
		if (len < max) {
			return true
		}
		// 倒序遍历(下面处理都基于倒序为正方向)
		while (len--) {
			let item_x_y = findIndex(str[len])
			let item_x = item_x_y[0]
			let item_y = item_x_y[1]
			let item_direction = calcIndex(now_x, now_y, item_x, item_y)
			// console.log(val[len], [now_x, now_y], item_x_y, direction, item_direction)

			if (direction == 0 && !(now_x == item_x && now_y == item_y)) {
				direction = item_direction
			}

			if (
				now_x < 0 ||
				now_y < 0 ||
				item_direction != direction ||
				(now_x == item_x && now_y == item_y)
			) {
				total = 1
				direction = 0
				now_x = item_x
				now_y = item_y
				continue
			}

			if (direction == item_direction && item_direction != 0) {
				total++
				now_x = item_x
				now_y = item_y
			}

			if (total >= max) {
				return false
			}
		}
		return true
	},
}




export type RTypeBase = {
	required?: boolean
	reg?: string | RegExp
	type?: string
	min?: number
	max?: number
	[K: string]: any
}

export type RTypeRegExp = RTypeBase | string

export default function rRegExp(rTypes: RTypeRegExp[]): (str: string) => boolean {
	return function (str: string): boolean {
		let len = rTypes.length
		while (len--) {
			const item: RTypeRegExp = rTypes[len]
			let itemRule: RTypeBase = {
				required: true,
				min: 0,
				max: 4
			}



			if (typeof item === "string") {
				if (Object.keys(regMatch).includes(item)) {
					itemRule.type = item
				}
			} else {
				itemRule = { ...itemRule, ...item }
			}

			if (itemRule.type
				&& regMatch[itemRule.type]
				&& !regMatch[itemRule.type](str, itemRule.min || 0, itemRule.max || 4)) {
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
