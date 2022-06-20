# rh-regexp

## 使用

```shell
npm install rh-regexp
```

```ts
import { RegExps } from  'rh-regexp'

export type RegExpRaw = {
 required?: boolean
 reg?: RegExp
 regs?: RegExp[]
 type?: string
 min?: number
 max?: number
}

// 使用
RegExps(
 // ...RegExpRaw[]
)(
 // 待校验的字符串
)

```

# `RegExps(..args)(str)`

- `args`:`RegExpRaw[] | RegExpRaw` 为校验规则数组
- `str`: 待校验字符串
- 规则写法: length 或 { reg: 'length'}:RTypeBase

```ts
export type RegExpRaw = {
 required?: boolean
 reg?: RegExp
 regs?: RegExp[]
 type?: string
 min?: number
 max?: number
}
```

## 说明

- 默认字符: `0-9a-zA-Z_`
- 符合规则并符合长度, 才不会放回`false`
  
| key                           | 参数   | 规则                      |
| :---------------------------- | :----- | :------------------------- |
| `length`                      | `[0,4)`  | 长度                       |
| `letter`                     | `[0,4)`  | 字母连续                   |
| `letterBegin`                 |        | 字母开头                   |
| `letterEnd`                   |        | 字母结束                   |
| `seLetter`               | `[0,4)`  | 字母有序连续               |
| `seLetterAsc`            | `[0,4)`  | 字母连续(升序)             |
| `seLetterDesc`           | `[0,4)`  | 字母连续(降序)             |
| `seLetterIgCase`     | `[0,4)`  | 字母连续(忽略大小写, 有序) |
| `seLetterIgCaseAsc`  | `[0,4)`  | 字母连续(忽略大小写,升序)  |
| `seLetterIgCaseDesc` | `[0,4)`  | 字母连续(忽略大小写,降序)  |
| `phone`                       |        | 电话号码码                 |
| `typeCount`              | `[3,15)`   | 字符种类(`数字, 字母, 字符[_]`)                   |
| `charCount`                   | `[4,15)` | 字符数量                   |
| `seKeyboard`              | `[0,4)`  | 键盘连续                   |
| `number`                | `[1,16)`  | 数字                   |
| `seNumber`                | `[0,4)`  | 连续数字                   |
| `seOrderNumber`           | `[0,4)`  | 连续有序数字               |
| `numbersAsc`                  | `[0,4)`  | 连续升序数字               |
| `numbersDesc`                 | `[0,4)`  | 连续降序数字               |

## 更新日志

- 1.0.0 正式版 RegExps拓展RegExp的用法, 并添加测试用例测试
