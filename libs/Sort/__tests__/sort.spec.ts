import quickSort from '../Quick'
import { casesGenerator } from './generator'
describe('Quick Sort Tests.', () => {
  test('should run correctly.', () => {
    const cases: TSortCases[] = casesGenerator()
    cases.forEach(c => {
      const { input, output } = c
      const _input = input()
      quickSort(_input)
      expect(_input).toEqual(output)
    })
  })
})
