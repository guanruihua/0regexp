/**
 * 规则 
 */
export type RegExpRaw = {
	/**
	 * 正则校验名称
	 */
	name?: string
	/**
	 * 必填
	 */
	required?: boolean
	/**
	 * 正则规则
	 */
	reg?: RegExp
	/**
	 * 正则规则数组
	 */
	regs?: RegExp[]
	/**
	 * 类型
	 */
	type?: string
	/**
	 * 长度 最小值
	 */
	min?: number
	/**
	 * 长度 最大值
	 */
	max?: number
}

export type RuleName =
	'Integer' | 'Float' |
	'LikeNumber' | 'ZeroStartNumber' |
	'ThousandNumber' | 'DomainName' |
	'IPV4' | 'IPV6' |
	'URL' | 'Netmask' |
	'ChinaPostalCode' | 'IdentityCard' |
	'Chinese' | 'ChineseLicensePlate' |
	'DoubleByteChar' | 'FullWidthSymbol' |
	'HalfWidthSymbol' | 'HexadecimalColor' |
	'Date' | 'Time' |
	'Day' | 'Mouth' |
	'LowLetter' | 'UppLetter' |
	'BeginLetter' | 'EndLetter' |
	'empty' | 'StartEndEmpty' |
	'FileName' | 'email' |
	'phone'
	// 非正则实现
	| 'SeriesKeyboard'

	| 'SeriesLetter' | 'SeriesOrderLetter' | 'SeriesLetterAsc' | 'SeriesLetterDesc' |'SeriesLetterIgCase' | 'SeriesLetterIgCaseAsc' | 'SeriesLetterIgCaseDesc'

	| 'SeriesNumber' | 'SeriesOrderNumber' | 'NumberAsc' | 'NumberDesc'

/**
 * 规则
 */
export type RegExpUnit = RegExpRaw | string

export interface Rule extends Record<string, any> {
	/**
	 * @description 规则名称
	 */
	name?: RuleName | string
	/**
	 * @description 当前规则信息描述
	 */
	message?: string
	/**
 * @description 类型，有 string | number | boolean | url | email | regexp |  integer | float | array | object | enum | date | url | hex | any
 * @default string
 * @type: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | any
 */
	type?: 'string' | 'number' | 'boolean' | 'url' | 'email' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | any
	/**
	 * @description 仅在 type 为 array 类型时有效，用于指定数组元素的校验规则	rule
	 */
	arrayRule?: Rule[]
	/**
	 * @description	是否匹配枚举中的值（需要将 type 设置为 enum）	any[]	
	 */
	enum?: any[]
	/**
	 * @description 仅在 type 为 object 类型时有效，用于指定子元素的校验规则	Record<string, rule>	
	 */
	objectRule?: Record<string, Rule>
	/** 
	 * @description string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度	number	
	 */
	len?: number | string | unknown[]
	/**
	 * @description 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度	number	
	 */
	max?: number | string | unknown[]
	/**
	 * @description 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度	number	
	 */
	min?: number | string | unknown[],
	/**
	 * @description 正则表达式匹配	RegExp	
	 */
	pattern?: RegExp
	/**
	 * @description 是否为必选字段	boolean	
	 */
	required?: boolean,
	/**
	 * @description 将字段值转换成目标值后进行校验(value) => any
	 */
	transform?: (value: any) => any,

	/**
	 * @description 自定义校验，接收 Promise 作为返回值
	 * @type (value, rule) => Promise<boolean>
	 */
	validator?: (value: any, rule: Rule) => Promise<boolean>,
	/**
	 * @description 仅警告，不阻塞表单提交	
	 * @type boolean
	 * @default false
	 */
	warningOnly?: boolean,
	/**
	 * @description 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效	
	 * @type boolean
	 * @default false
	 */
	whitespace?: boolean,
}