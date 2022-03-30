# rh-regexp

## 使用

```shell
npm install rh-regexp
```

```ts
import { rRegExp } from  'rh-regexp'

// # rRegExp([..args])(str)
// # args: 为校验规则数组
// # str: 待校验字符串
// # 规则写法: length 或 { reg: 'length'}:RTypeBase

export type RTypeBase = {
 required?: boolean
 reg?: RegExp
 regs?: RegExp[]
 type?: string
 min?: number
 max?: number
}

```

## 说明

> 只支持ts
默认字符: `0-9a-zA-Z_`

| key                           | 参数                                                              | 说明                       |
| :---------------------------- | :---------------------------------------------------------------- | :------------------------- |
| `length`                      | [0,4)                                                             | 长度                       |
| `charCount`                   | [4,15)                                                            | 字符统计                   |
| `letterBegin`                 |                                                                   | 字母开头                   |
| `letterEnd`                   |                                                                   | 字母结束                   |
| `letters`                     | [0,4)                                                             | 字母连续                   |
| `serialLetters`               | [0,4)                                                             | 字母有序连续               |
| `serialLettersAsc`            | [0,4)                                                             | 字母连续(升序)             |
| `serialLettersDesc`           | [0,4)                                                             | 字母连续(降序)             |
| `serialLettersIgnoreCase`     | [0,4)                                                             | 字母连续(忽略大小写, 有序) |
| `serialLettersIgnoreCaseAsc`  | [0,4)                                                             | 字母连续(忽略大小写,升序)  |
| `serialLettersIgnoreCaseDesc` | [0,4)                                                             | 字母连续(忽略大小写,降序)  |
| `phone`                       |                                                                   | 电话号码码                 |
| `typeCharCounts`              | `{ regs = [/[a-z]/,/[A-Z]/, /[1-9]/, /[_]/], min = 3, max = 15 }` | 字符种类                   |
| `charCount`                   | [4,15)                                                            | 字符数量                   |
| `serialKeyboard`              | [0,4)                                                             | 键盘连续                   |
| `serialNumber`                | [0,4)                                                             | 连续数字                   |
| `serialOrderNumber`           | [0,4)                                                             | 连续有序数字               |
| `numbersAsc`                  | [0,4)                                                             | 连续升序数字               |
| `numbersDesc`                 | [0,4)                                                             | 连续降序数字               |
