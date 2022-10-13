import { RegExps } from '..'
import { testUnit, expect } from './util'

testUnit('length', RegExps('length'),
	{ params: 'a', tobe: false },
	{ params: 'ab', tobe: false },
	{ params: 'abc', tobe: false },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	{ params: '123', tobe: false },
)
