export function empty(str: string): boolean {
	return /\n\s*\r/.test(str)
}