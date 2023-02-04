/* eslint-disable*/
import { Dictionary } from '../src'
import { test } from 'unit-testing-js'


test(
	'Dictionary', (v: RegExp, val) => v.test(val),

	{ params: [Dictionary.identityCard, '420203198911042119'], tobe: true },
	{ params: [Dictionary.identityCard, '420203198911042119'], tobe: true },
	{ params: [Dictionary.identityCard, '420106198302253619'], tobe: true },
	{ params: [Dictionary.identityCard, '430682198102252713'], tobe: true },
	{ params: [Dictionary.identityCard, '222402198402190614'], tobe: true },
	{ params: [Dictionary.identityCard, '320102198111223813'], tobe: true },
	{ params: [Dictionary.identityCard, '420602198312161058'], tobe: true },
	{ params: [Dictionary.identityCard, '130203195503070310'], tobe: true },
	{ params: [Dictionary.identityCard, '511303198805153112'], tobe: true },
	{ params: [Dictionary.identityCard, '510108199410111211'], tobe: true },
	{ params: [Dictionary.identityCard, '654323199006041732'], tobe: true },
	{ params: [Dictionary.identityCard, '150103198208081158'], tobe: true },
	{ params: [Dictionary.identityCard, '510922198704034633'], tobe: true },
	{ params: [Dictionary.identityCard, '431103198504150953'], tobe: true },
	{ params: [Dictionary.identityCard, '230103199001192437'], tobe: true },

	{ params: [Dictionary.email, 'ruihaug@qq.com'], tobe: true },
	{ params: [Dictionary.email, 'ruihaug@qq.com'], tobe: true },

	{ params: [Dictionary.HexadecimalColor, '#ffffff'], tobe: true },
	{ params: [Dictionary.HexadecimalColor, '#fff'], tobe: true },

	{ params: [Dictionary.phone, '12064563043'], tobe: true },
	{ params: [Dictionary.phone, '12014222730'], tobe: true },
	{ params: [Dictionary.phone, '12027953213'], tobe: true },
	{ params: [Dictionary.phone, '12066561175'], tobe: true },
	{ params: [Dictionary.phone, '12012987481'], tobe: true },
	{ params: [Dictionary.phone, '12064512559'], tobe: true },
	{ params: [Dictionary.phone, '17632736140'], tobe: true },
	{ params: [Dictionary.phone, '85263032982'], tobe: true },
	{ params: [Dictionary.phone, '85263052773'], tobe: true },
	{ params: [Dictionary.phone, '85239154802'], tobe: true },
	{ params: [Dictionary.phone, '8618300568261'], tobe: true },
	{ params: [Dictionary.phone, '8618958009044'], tobe: true },


	{ params: [Dictionary.number, '8618958009044'], tobe: true },
	{ params: [Dictionary.number, '861895800904.4'], tobe: true },
	{ params: [Dictionary.number, '-861895800904.4'], tobe: true },
	{ params: [Dictionary.number, '+861895800904.4'], tobe: true },
	{ params: [Dictionary.number, '8,618,958,009,044'], tobe: true },
	{ params: [Dictionary.number, '8,618,958,009,044.01'], tobe: true },
	{ params: [Dictionary.number, '8618958009044w'], tobe: false },
	{ params: [Dictionary.number, ''], tobe: false },


	{ params: [Dictionary.Chinese, '瑞毕'], tobe: true },
	{ params: [Dictionary.Chinese, '8618958009044w'], tobe: false },
	{ params: [Dictionary.Chinese, ''], tobe: false },


	{ params: [Dictionary.ipv4, '125.89.56.21'], tobe: true },
	{ params: [Dictionary.ipv4, 'AD80:0000:0000:0000:ABAA:0000:00C2:0002'], tobe: false },

	{ params: [Dictionary.ipv6, '125.89.56.21'], tobe: false },
	{ params: [Dictionary.ipv6, 'AD80:0000:0000:0000:ABAA:0000:00C2:0002'], tobe: true },
	{ params: [Dictionary.ipv6, '1030::C9B4:FF12:48AA:1A2B'], tobe: true },
	{ params: [Dictionary.ipv6, '125.89.56.21'], tobe: false },


	{ params: [Dictionary.url, 'https://guanruihua.github.io/#/'], tobe: true },

	{ params: [Dictionary.doubleByteChar, '啊啊啊'], tobe: true },
	{ params: [Dictionary.doubleByteChar, 'a,A啊啊啊'], tobe: false },
	{ params: [Dictionary.hasDoubleByteChar, 'a,A啊啊啊'], tobe: true },
)