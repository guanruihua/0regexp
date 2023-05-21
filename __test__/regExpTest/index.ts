import { isArray } from 'asura-eye'
import { UnitTest } from 'unit-testing-js'
import { cases } from './cases'
import NumberReg from '../../src/dictionary'

for (const key in NumberReg) {
	isArray(cases[key])
		&& UnitTest(str => NumberReg[key].test(str), `${key}:true`)
			.addParamMap(cases[key])
			.setDefaultValue(true)
			.buildCases().run()

	isArray(cases['No' + key])
		&& UnitTest(str => NumberReg[key].test(str), `${key}:false`)
			.addParamMap(cases['No' + key])
			.setDefaultValue(false)
			.buildCases().run()
}