import { RegExps } from '..'
import { testUnit} from './util'

testUnit('length', RegExps('length'),
	{ param: 'a', tobe: false },
	{ param: 'ab', tobe: false },
	{ param: 'abc', tobe: false },
	{ param: 'abcd', tobe: true },
	{ param: 'abcde', tobe: true },
	{ param: '123', tobe: false },
)
