import { Rule } from "../type";

export function RuleErrorMonitor(rule: Rule) {
	const { required, len } = rule
	if (required && len === 0) throw new Error(`required = true and  len = 0 conflict.`)
}