/**
 * @title ChinaPostalCode
 * @description 邮政编码
 * @param code {string}
 * @returns {boolean]}
 */
export function ChinaPostalCode(code:string):boolean{
	return /[1-9]\d{5}(?!\d)/.test(code)
}