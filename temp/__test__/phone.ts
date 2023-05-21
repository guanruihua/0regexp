import { RegExps } from '.'
import { testUnit } from './util'

testUnit('phone', RegExps('phone'),
	{ params: '123456789', tobe: false },
	{ params: '13419382123', tobe: true },
	{ params: '', tobe: false },
	{ params: 'a', tobe: false },
	{ params: 'ab', tobe: false },
	{ params: 'abc', tobe: false },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
)
