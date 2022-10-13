export const Dictionary: Record<string, RegExp> = {
	identityCardCode: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
	Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	// const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	// 16进制颜色的校验
	HexadecimalColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
	phone: /\d{3}-\d{8}|\d{4}-\d{7}/,
	// 身份证号(15位、18位数字)：
	identityCard: /^\d{15}|\d{18}$/,
	// 域名
	// domainName: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/

	// InternetURL:/[a-zA-z]+://[^\s]* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/

	// 9. 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：`^[a-zA-Z][a-zA-Z0-9_]{4,15}$`

	// 1. 有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：`^[1-9][0-9]*$`

	// 2. 这表示任意一个不以0开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：`^(0|[1-9][0-9]*)$`

	// 3. 一个0或者一个不以0开头的数字.我们还可以允许开头有一个负号：`^(0|-?[1-9][0-9]*)$`

	// 4. 这表示一个0或者一个可能为负的开头不为0的数字.让用户以0开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：`^[0-9]+(.[0-9]+)?$`

	// 5. 必须说明的是,小数点后面至少应该有1位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：`^[0-9]+(.[0-9]{2})?$`

	// 6. 这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：`^[0-9]+(.[0-9]{1,2})?$`

	// 7. 这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：`^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$`

	// 8. 1到3个数字,后面跟着任意个 逗号+3个数字,逗号成为可选,而不是必须：`^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$`

	// 2. 中文字符的正则表达式：`[\u4e00-\u9fa5]`
	// 3. 双字节字符：`[^\x00-\xff]` (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))
	// 5. HTML标记的正则表达式：`<(\S*?)[^>]*>.*?</\1>|<.*? />` (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
	// 6. 首尾空白字符的正则表达式：`^\s*|\s*$或(^\s*)|(\s*$)` (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
	// 13. 子网掩码：`((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))`
	// 14. 校验日期:`^[?:(?!0000](0-9){4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$`(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)
	// 15. 抽取注释：`<!--(.*?)-->`
	// 16. 查找CSS属性:`^\\s*[a-zA-Z\\-]+\\s*[:]{1}\\s[a-zA-Z0-9\\s.#]+[;]{1}`
	// 17. 提取页面超链接:`(<a\\s*(?!.*\\brel=)[^>]*)(href="https?:\\/\\/)((?!(?:(?:www\\.)?'.implode('|(?:www\\.)?', $follow_list).'))[^" rel="external nofollow" ]+)"((?!.*\\brel=)[^>]*)(?:[^>]*)>`
	// 18. 提取网页图片:`\\< *[img][^\\\\>]*[src] *= *[\\"\\']{0,1}([^\\"\\'\\ >]*)`
	// 19. 提取网页颜色代码:`^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`
	// 20. 文件扩展名效验:`^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$`
	// 21. 判断IE版本：`^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).*$`

	// - 验证是否含有 `^%&',;=?$\"` 等字符：`[^%&',;=?$\x22]+`
	// - 验证汉字：`^[\u4e00-\u9fa5],{0,}$`
	// - 验证Email地址：`^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$`
	// - 验证InternetURL：`^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$`
	// - 验证电话号码：`^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$`：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
	// - 验证身份证号（15位或18位数字）：`^\d{15}|\d{}18$`
	// - 验证一年的12个月：`^(0?[1-9]|1[0-2])$` 正确格式为：“01”-“09”和“1”“12”
	// - 验证一个月的31天：`^((0?[1-9])|[(1|2](0-9))|30|31)$`    正确格式为：01、09和1、31。
	// - 整数：`^-?\d+$`
	// - 非负浮点数（正浮点数 + 0）：`^\d+(\.\d+)?$`
	// - 正浮点数   `^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$`
	// - 非正浮点数（负浮点数 + 0） `^((-\d+(\.\d+)?)|(0+(\.0+)?))$`
	// - 负浮点数  `^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$`
	// - 浮点数  `^(-?\d+)(\.\d+)?`
	/**

7、日期 YYYY-MM-DD
const dateReg = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/
日期 YYYY-MM-DD hh:mm:ss
const dateReg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
9、整数的校验
const intReg = /^[-+]?\d*$/
10、小数的校验
const floatReg = /^[-\+]?\d+(\.\d+)?$/
15、车牌号的校验
const carNoReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
16、只含字母的字符串
const letterReg = /^[a-zA-Z]+$/

17、包含中文的字符串
const cnReg = /[\u4E00-\u9FA5]/

18、密码强度的校验
说明：密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符
const passwordReg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}/


1. 汉字：`^[\u4e00-\u9fa5]{0,}$`
2. 英文和数字：`^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$`
3. 长度为3-20的所有字符：`^.{3,20}$`
9. 中文、英文、数字包括下划线：`^[\u4E00-\u9FA5A-Za-z0-9_]+$`
10. 中文、英文、数字但不包括下划线等符号：`^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$`
11. 可以输入含有`^%&',;=?$\"`等字符：`[^%&',;=?$\x22]+`
12. 禁止输入含有`~`的字符`[^~\x22]+`
- `.*`匹配除 `\n`: 以外的任何字符
- 注释 `(?#comment)`:  这种类型的组不对正则表达式的处理产生任何影响
- `/[\u4E00-\u9FA5]/`: 汉字
- `/[\uFF00-\uFFFF]/`: 全角符号
- `/[\u0000-\u00FF]/`: 半角符号
	 */
}
// 11、保留n位小数
// export function checkFloat(n) {
  // return new RegExp(`^([1-9]+[\d]*(.[0-9]{1,${n}})?)$`).test(n)
// }