
export type RTypeBase = {
	required?: boolean
	reg?: RegExp
	regs?: RegExp[]
	type?: string
	min?: number
	max?: number
}

export type RTypeRegExp = RTypeBase | string
