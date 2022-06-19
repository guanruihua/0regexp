import { RegExps } from '../src'
import { testUnit, expect } from './util'

testUnit('length', RegExps('length'),
	{ params: 'a', tobe: false },
	{ params: 'ab', tobe: false },
	{ params: 'abc', tobe: false },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	expect(RegExps('length')).setParams('123').tobe(false)
)