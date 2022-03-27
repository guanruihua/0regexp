import { rRegExp } from '../index'

const func = rRegExp([
	'serialKeyboard',
	'letterBegin',
	{ reg: /[A-Z]/ },
	// / { type: 'length', max: 100},
	'charCount',
	'serialNumbers',
	'serialNumbersDesc',
	'serialLetters',
	'serialLettersDesc',
	'serialLettersIgnoreCase',
	'serialLettersIgnoreCaseDesc',
	{ reg: /[a-z]/ },
	{ reg: /[0-9]/ },
	{ reg: /[@|!|\(|\)|_]/ },
])
// seq 顺序

// console.log(func('aA123123123123333@'))
console.log(func('a@123A'))
// console.log(func('aA231@123a45abC432'))
// console.log(func('aA123123123123!'))
// console.log(func('aA123123123123('))
// console.log(func('aA123123123123)'))
// console.log(func('aA123123123123_'))
// console.log(func('aA123123123123'))
// console.log(func('a123123123123@'))
// console.log(func('_a123123123123'))