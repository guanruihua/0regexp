import { RegExps } from '.'
import { testUnit } from './util'

testUnit('lowLetter', RegExps('lowLetter'),
	{ params: 'a', tobe: true },
	{ params: 'aB', tobe: true },
	{ params: 'AB', tobe: false },
)

testUnit('uppLetter', RegExps('uppLetter'),
	{ params: 'a', tobe: false },
	{ params: 'aB', tobe: true },
	{ params: 'AB', tobe: true },
)