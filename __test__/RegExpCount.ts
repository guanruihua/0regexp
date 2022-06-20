import { RegExpCount } from '../src'
import { testUnit } from './util'

testUnit('RegExpCount', RegExpCount('length'),
	{ params: 'a', tobe: ['length'] },
)
