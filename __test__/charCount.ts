import { RegExps } from '../src'
import { testUnit } from './util'


testUnit('typeCount', RegExps('typeCount'),
	{ params: '', tobe: false },
	{ params: 'a', tobe: false },
	{ params: 'ab', tobe: false },
	{ params: 'abc', tobe: false },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: 'aB1', tobe: true },
	{ params: 'aB1_', tobe: true },
	// expect(RegExps('length')).setParams('123').tobe(false)
)


testUnit('charCount', RegExps('charCount'),
	{ params: '', tobe: false },
	{ params: 'a', tobe: false },
	{ params: 'ab', tobe: false },
	{ params: 'abc', tobe: false },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	// expect(RegExps('length')).setParams('123').tobe(false)
)
