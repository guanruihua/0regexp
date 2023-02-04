# 0regexp

## 使用

```shell
npm install 0regexp
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

## `RegExps(args)(str)`

- 测试字串是否符合规则
- `args` `RegExpUnit[] | RegExpUnit` 为校验规则数组
- `str` `string` 待校验字符串
- `result`: `boolean`

```ts
export type RegExpRaw = {
 required?: boolean
 reg?: RegExp
 regs?: RegExp[]
 type?: string
 min?: number
 max?: number
}

export type RegExpUnit = ReagExpRaw | string
```

## `RegExpCount(args)(str[, flag])`

- 检测字串符合的指定规则
- `args` `RegExpUnit[] | RegExpUnit` 为校验规则数组
- `flag` `boolean = false` => `false`: 返回不符合规则 `true`: 返回符合规则
- `str` `string` 待校验字符串
- `result`: `RegExpUnit[]`

## 说明

- 默认字符: `0-9a-zA-Z_`
- 符合规则并符合长度, 才不会放回`false`
- 规则可通过传入 自定义`ReagExpRaw` 来覆盖
- 特别说明:
  - 大部分写好的规则, 只可以重写`min` 和 `max`
  - `typeCount`: 重写规则需要覆盖`regs`, 其他均是 `reg`
  
| key                  | 长度     | 规则                                         |
| :------------------- | :------- | :------------------------------------------- |
| `required`           |          | 非空                                         |
| `length`             | `[0,4)`  | 长度                                         |
| `letter`             | `[0,4)`  | 字母连续                                     |
| `letterBegin`        |          | 字母开头                                     |
| `letterEnd`          |          | 字母结束                                     |
| `lowLetter`          |          | 小写字母                                     |
| `uppLetter`          |          | 大写字母                                     |
| `seLetter`           | `[0,4)`  | 字母有序连续                                 |
| `seLetterAsc`        | `[0,4)`  | 字母连续(升序)                               |
| `seLetterDesc`       | `[0,4)`  | 字母连续(降序)                               |
| `seLetterIgCase`     | `[0,4)`  | 字母连续(忽略大小写, 有序)                   |
| `seLetterIgCaseAsc`  | `[0,4)`  | 字母连续(忽略大小写,升序)                    |
| `seLetterIgCaseDesc` | `[0,4)`  | 字母连续(忽略大小写,降序)                    |
| `phone`              |          | 电话号码码                                   |
| `typeCount`          | `[3,15)` | 字符种类(`数字, 大写字母,小写字母, 字符[_]`) |
| `charCount`          | `[4,15)` | 字符数量                                     |
| `seKeyboard`         | `[0,4)`  | 键盘连续                                     |
| `number`             | `[1,16)` | 数字                                         |
| `seNumber`           | `[0,4)`  | 连续数字                                     |
| `seOrderNumber`      | `[0,4)`  | 连续有序数字                                 |
| `numbersAsc`         | `[0,4)`  | 连续升序数字                                 |
| `numbersDesc`        | `[0,4)`  | 连续降序数字                                 |

### 校验数字的表达式

- `Regular.Number.*`

| name             | 描述               | 正则                            |
| :--------------- | :----------------- | :------------------------------ |
| `Like`           | 数字               | `^[0-9]*$`                      |
| `N(n)`           | n位的数字          | `^\d{n}$`                       |
| `Least_N(n)`     | 至少n位的数字      | `^\d{n,}$`                      |
| `M_To_N(m,n)`    | m-n位的数字        | `^\d{m,n}$`                     |
| `Can_Zero_Begin` | 零和非零开头的数字 | <code>^(0\|[1-9][0-9]*)$</code> |
| `Float`          | 浮点数             | `^(-?\d+)(\.\d+)?$`             |
| `NotFloat`       | 非正浮点数         | `^((-\d+(\.\d+)?)               | (0+(\.0+)?))$` |

## 更新日志

- 1.0.0 正式版 RegExps拓展RegExp的用法, 并添加测试用例测试
