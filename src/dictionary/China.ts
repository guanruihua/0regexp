export default {

	/**
		* @description 邮政编码
	 */
	ChinaPostalCode: /[1-9]\d{5}(?!\d)/,

	/**
	 * @description 身份证(18位)
	 */
	IdentityCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,

	/**
	 * @description 汉字
	 */
	Chinese: /^[\u4e00-\u9fa5]{1,}$/,

	/**
	 * @description 中国车牌
	 */
	LicensePlate: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
}