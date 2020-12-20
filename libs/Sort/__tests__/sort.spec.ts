import quickSort from '../Quick'
import quickIn3Way from '../Quick/3ways'
import { casesGenerator } from '../../../utils/generator/cases/sort.generator'

describe('Quick Sort Tests.', () => {
  test('common quick sort should run correctly.', () => {
    const cases: TSortCases[] = casesGenerator()
    cases.forEach(c => {
      const { input, output } = c
      const _input = input()
      quickSort(_input)
      expect(_input).toEqual(output)
    })
  })

  test('quick sort in 3 ways should run correctly.', () => {
    const cases: TSortCases[] = casesGenerator()
    cases.forEach(c => {
      const { input, output } = c
      const _input = input()
      quickIn3Way(_input)
      expect(_input).toEqual(output)
    })
  })
})
