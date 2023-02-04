
/**
 * @title identityCardCode
 * @description 身份证
 * @param code {string}
 * @returns {boolean}
 * @version 1.2.0
 */
export function identityCardCode(code:string):boolean{
	return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(code)
}