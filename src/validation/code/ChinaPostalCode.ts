/**
 * 邮政编码
 */
export function ChinaPostalCode(str:string):boolean{
	return /[1-9]\d{5}(?!\d)/.test(str)
}