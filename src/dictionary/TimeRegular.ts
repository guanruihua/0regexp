export default {

	/**
	 *  @description 日期(YYYY-MM-DD)
	 */
	Date: /^[1-9]\d?-[0-1]\d?-[0-3]\d?$/,
	/**
	 *  @description 日期(YYYY-MM-DD hh:mm:ss)
	 */
	Time: /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/,
	/**
	 * @description 日期中的 天
	 */
	Day: /^(0?[1-9])|[1|2](0-9)|30|31$/,

	/**
	 * @description 日期中的 月份
	 */
	Mouth: /^(0?[1-9]|1[0-2])$/,
}