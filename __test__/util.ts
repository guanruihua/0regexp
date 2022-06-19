import { test, expect } from 'rh-test'
export { expect }

export function testUnit(name: string, func: (...args: any) => any, ...args: any[]) {
	test(name, ...args.map(unit => {
		const { params, tobe, name = 'default' } = unit
		if (name === 'default')
			return expect(func).setParams(params).tobe(tobe)
		return unit
	}))
}