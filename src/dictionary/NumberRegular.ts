export default {
	/**
	 * @description 整数
	 */
	Integer: /^[-+]?\d+?$/,
	/**
	 * @description 浮点数
	 */
	Float: /^[-+]?\d+\.\d+$/,
	/**
	 * @description: 正数, 负数, 小数
	 */
	LikeNumber: /^[-+]?\d+(\.\d+)?$/,
	/**
	 * @description: 零开头的数字
	 */
	ZeroStartNumber: /^[-+]?0(\d+)?(\.\d+)?$/,
	/**
	 * @description 千位数字 ("10000.00" 和 "10,000.00")
	 */
	ThousandNumber: /^[-+]?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
}