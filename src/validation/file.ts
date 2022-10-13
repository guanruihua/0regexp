export function xml(str: string): boolean {
	return /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/.test(str)
}