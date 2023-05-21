export default {

	/**
	 * @description 双字节字符(包含中文)
	 */
	// eslint-disable-next-line no-control-regex
	doubleByteChar: /^[^\x00-\xff]{1,}$/,

	/**
	 * @description 全角符号
	 */
	FullWidthSymbol: /^[\uFF00-\uFFFF]{1,}$/,

	/**
	 * @description 半角符号
	 */
	// eslint-disable-next-line no-control-regex
	HalfWidthSymbol: /^[\u0000-\u00FF]{1,}$/,
}