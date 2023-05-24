import { isArray } from "asura-eye"
import { Rule } from "../type"

export function enumRule(value: unknown, rule: Rule) {
	const { enum: enumList } = rule
	return isArray(enumList) && enumList.includes(value)
}