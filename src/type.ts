
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

/**
 * 规则
 */
export type RegExpUnit = RegExpRaw | string
