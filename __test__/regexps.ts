import { UnitTest } from 'unit-testing-js'
import { RegExps as _ } from '../src'


async function run() {

	UnitTest(
		(obj) => obj.success.length == 1,
		'RegExps')
		.addParamMap(
			[
				await _([{ enum: ['a', 'b', 'c'] }], 'a'),
				await _([{ required: true }], 'aString'),
				// await _([{ required: true, len: 0 }], 'aString'),
				await _([{ required: true, len: 1 }], 'a'),
				await _([{ required: true, min: 1, max: 10 }], 'aString'),
				await _([{ required: true, min: 1, max: 1000 }], 'aString'),
				await _([{ required: true, len: 'aString' }], 'aString'),
			]
		)
		.setDefaultValue(true)
		.buildCases()
		.run()

	UnitTest(
		(obj) => obj.error.length == 1,
		'RegExps:Error')
		.addParamMap(
			[
				await _([{ type: 'enum', enum: ['a', 'b', 'c'] }], 'e'),
				await _([{ required: true }], ''),
				await _([{ required: true, min: 1 }], ''),
				await _([{ required: true, max: 1 }], 'aa'),
				await _([{ required: true }], null),
				await _([{ required: true }], undefined),
				await _([{ required: true, len: 'aString' }], 'aString1'),
			]
		)
		.setDefaultValue(true)
		.buildCases()
		.run()

}

run()

