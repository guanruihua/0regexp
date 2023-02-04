export * from '../src'

import { loadModule, TestSetting } from 'unit-testing-js'
TestSetting.set('isSummary', true)

loadModule(async () => {
	import('./serialKeyboard')
	import('./length')
	import('./letter')
	import('./letter2')
	import('./number')
	import('./Dictionary')
	// import './charCount'
	// import './phone'
	// import './special'
	// import './RegExpCount'
})