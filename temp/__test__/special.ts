import { RegExps } from '.'
import { testUnit } from './util'

testUnit('required', RegExps('required'),
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: '', tobe: false },
)
