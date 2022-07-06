const _Number = {
	/**
	 * @description: 正数, 负数, 小数
	 */
	Like: /^(\-\|\+)?\d+(\.\d+)?$/,
	/**
	 * @description: n位的数字
	 * @param n number
	 * @returns RegExp
	 */
	N: (n: number): RegExp => new RegExp(`^\\d{${n}}$`, 'g'),
	/**
	 * @description 至少n位数字
	 * @param n number
	 * @returns RegExp
	 */
	Least_N: (n: number): RegExp => new RegExp(`^\\d{${n},}$`, 'g'),
	/**
	 * @description m-n位数字
	 * @param m number
	 * @param n number
	 * @returns RegExp
	 */
	M_To_N: (m: number, n: number): RegExp => new RegExp(`^\\d{${m},${n}}$`, 'g'),
	/**
	 * @description: 零和非零开头的数字
	 */
	Can_Zero_Begin: /^(0|[1-9][0-9]*)$/,
	/**
	 * @description 浮点数
	 */
	Float: /^(-?\d+)(\.\d+)?$/,
	/**
	 * @description 非浮点数
	 */
	NotFloat: /^(-?\d+)(\.\d+)?$/
}

/**
 * 正则
 */
export const Regular = {
	Number: _Number
}