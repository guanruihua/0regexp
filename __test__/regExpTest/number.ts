const ThousandNumber = ['100,200', '1,300', '1,300.0']
const NoThousandNumber = ['100,2000', '0001,300']

const ZeroStartNumber = ['0.1', '01', '001']
const NoZeroStartNumber = ['1.0', '1', '100']
const Float = ['1.1', '2.1', '0.1']
const Integer = ['123', '-123', '+12']
const NoInteger = ['0.123', '123.0', '-123.1', '+12.2']
const LikeNumber = ['123', '-123', '+12']
const NoLikeNumber = ['a', 'b']

export  default {
	ThousandNumber: [
		...ThousandNumber
	],
	NoThousandNumber: [
		...NoThousandNumber
	],
	ZeroStartNumber,
	NoZeroStartNumber: [
		...NoZeroStartNumber,
	],
	Float,
	NoFloat: [
		...Integer,
		...NoLikeNumber,
	],
	Integer,
	NoInteger: [
		...NoInteger,
		...NoLikeNumber
	],
	LikeNumber: [
		...LikeNumber,
		...Integer,
		...Float,
	],
	NoLikeNumber: [
		...NoLikeNumber,
	],
}