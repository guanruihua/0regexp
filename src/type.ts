
export type RTypeBase = {
	required?: boolean
	reg?: RegExp
	regs?: RegExp[]
	type?: string
	min?: number
	max?: number
	[K: string]: any
}

export type RTypeRegExp = RTypeBase | string
