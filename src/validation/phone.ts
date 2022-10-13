
/* 电话号码 */
export function phone(str: string) {
	return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str)
}