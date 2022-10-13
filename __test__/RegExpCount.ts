import { RegExpCount } from '.'
import { testUnit } from './util'

testUnit('RegExpCount', RegExpCount('length'),
	{ params: 'a', tobe: ['length'] },
)
