import { RegExps } from '.'
import { test } from 'rh-test'

// test<any, any>('number', (a: any) => RegExps('num')(a),
test<any, any>('number', RegExps('num'),
	// { param: , tobe: false },
	{ param: 'a', tobe: false },
	{ param: '123', tobe: true },
	{ param: '@123', tobe: false },
	{ param: '123a', tobe: false },
	{ param: '_123a', tobe: false },
)


test('numbersAsc', RegExps(['numbersAsc']),
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: false },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: false },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: '@123A', tobe: true },
	{ params: 'A231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true }
)

test('numbersDesc', RegExps(['numbersDesc']),
	{ params: '2343211111', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: '@123A', tobe: true },
	{ params: 'A231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true }
)

test('seOrderNumber', RegExps(['seOrderNumber']),
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: false },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: false },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: false },
	{ params: '@123A', tobe: true },
	{ params: 'A231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: false },
	{ params: 'aA123123123123(', tobe: false },
	{ params: 'aA123123123123)', tobe: false },
	{ params: 'aA123123123123_', tobe: false },
	{ params: 'aA123123123123', tobe: false },
	{ params: 'a123123123123@', tobe: false },
	{ params: '_a123123123123', tobe: false }
)

test('seNumber', RegExps(['seNumber']),
	{ params: '2341111', tobe: false },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: false },
	{ params: '1543a234a5', tobe: false },
	{ params: '4543a2', tobe: false },
	{ params: '23456', tobe: false },
	{ params: '1111', tobe: false },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: false },
	{ params: 'aA11111', tobe: false },
	{ params: '3333@', tobe: false },
	{ params: 'aA123123123123333@', tobe: false },
	{ params: '@123A', tobe: true },
	{ params: 'A231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: false },
	{ params: 'aA123123123123(', tobe: false },
	{ params: 'aA123123123123)', tobe: false },
	{ params: 'aA123123123123_', tobe: false },
	{ params: 'aA123123123123', tobe: false },
	{ params: 'a123123123123@', tobe: false },
	{ params: '_a123123123123', tobe: false }
)
