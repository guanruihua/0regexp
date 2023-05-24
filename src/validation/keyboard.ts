import { Rule } from '../type'
import { getLength } from './util'

/**
 * @description 键盘连续(忽略大小写)
 */
export function SeriesKeyboard(val: string, rule: Rule): boolean {
	const { max }: Rule = rule
	const maxLen = getLength(max, 4)

	const keyPadMap = [
		['1!', '2@', '3#', '4$', '5%', '6^', '7&', '8*', '9(', '0)', '-_', '=+'],
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{[', ']}', '\\|'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', '\'"'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm', ',<', '.>', '/?']
	]
	// 获取字符在键盘的坐标
	function findIndex(_chart) {
		const x = -2
		const y = -2
		let _y = 4
		let _x = -2
		while (_y--) {
			_x = keyPadMap[_y].length
			while (_x--) {
				const item = keyPadMap[_y][_x].toLowerCase()
				const itemLen = item.length || 0
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
	let len = val.length
	if (len < maxLen) {
		return true
	}

	// 倒序遍历(下面处理都基于倒序为正方向)
	while (len--) {
		const item_x_y = findIndex(val[len])
		const item_x = item_x_y[0]
		const item_y = item_x_y[1]
		const item_direction = calcIndex(now_x, now_y, item_x, item_y)

		if (direction == 0 && !(now_x == item_x && now_y == item_y)) {
			direction = item_direction
		}

		if (
			now_x < 0 ||
			now_y < 0 ||
			direction == 0 ||
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

		if (total >= maxLen) {
			return false
		}
	}
	return true
}