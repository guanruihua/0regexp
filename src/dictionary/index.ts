import NumberReg from './Number'
import WebRegular from './Web'
import ChinaRegular from './China'
import CharRegular from './Char'
import ColorRegular from './Color'
import TimeRegular from './Time'
import LetterRegular from './Letter'

export const Regular = {
	...NumberReg,
	...WebRegular,
	...ChinaRegular,
	...CharRegular,
	...ColorRegular,
	...TimeRegular,
	...LetterRegular,
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
}