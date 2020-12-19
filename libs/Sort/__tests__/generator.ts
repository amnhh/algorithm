import { genUnduplicateUnsortedArray, genUnsortedFilledArr, nativeSort } from '../../../utils/generator/Array';

/**
 * sort 相关 test case 的创建方法
 * 
 * @returns TSortCases 
 */
const simpleCasesCreator = (a: number[]): TSortCases => ({
  input: () => [...a],
  output: nativeSort(a)
})

// 带重复元素的数组
const unsortedArrCreator = (): TSortCases => simpleCasesCreator(genUnsortedFilledArr())
// 不带重复元素的数组
const unsortedUnduplicateArrCreator = (): TSortCases => simpleCasesCreator(genUnduplicateUnsortedArray())
// 空数组
const emptyArrCreator = (): TSortCases => simpleCasesCreator([])


export const casesGenerator = (): TSortCases[] => {
  let count = 0;
  const cases: TSortCases[] = [];
  
  // 无序数组，带有重复元素
  while (count++ < 10) cases.push(unsortedArrCreator());

  // 无序数组，不带重复元素
  while (count++ < 20) cases.push(unsortedUnduplicateArrCreator())
  
  cases.push(emptyArrCreator())

  return cases;
};
