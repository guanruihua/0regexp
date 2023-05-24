import { isArray, isNumber, isString, isUndefined } from 'asura-eye';

export function getLength(value?: unknown, defaultValue = 0): number {
	if (isNumber(value)) return value
	if (isString(value) || isArray(value)) return value.length
	if (isUndefined(value)) return defaultValue
	return defaultValue
}