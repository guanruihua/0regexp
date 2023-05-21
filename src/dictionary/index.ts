import NumberReg from './NumberRegular'
import WebRegular from './WebRegular'
import ChinaRegular from './ChinaRegular'
import CharRegular from './CharRegular'
import ColorRegular from './ColorRegular'
import TimeRegular from './TimeRegular'

export default {
	...NumberReg,
	...WebRegular,
	...ChinaRegular,
	...CharRegular,
	...ColorRegular,
	...TimeRegular,
	/**
	 * @description 空
	 */
	empty: /\s*\r/,
	/**
	 * @description 开头和结尾空白字符
	 */
	StartEndEmpty: /(^\s*)|(\s*$)/,
	/**
	 * @description 文件扩展名效验
	 */
	FileName: /^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$/,
	/**
	 * @description 邮箱
	 */
	email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,

	/**
	 * @description 手机号码
	 */
	phone: /^\d{11}|\d{13}$/,
	phone1: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
}