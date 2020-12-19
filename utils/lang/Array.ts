import StdRandom from '../StdRandom'
import { ArgumentsCheckError } from '../error'

/**
 * 数组乱序
 * 
 * O(logn) 复杂度的乱序~
 */
export const disorder = (arr: number[]): number[] => arr.sort(() => Math.random() - Math.random())

/**
 * 数组去重
 */
export const unique = <T = number>(arr: T[]): T[] => [...new Set([...arr])]

/**
 * 添加重复元素
 */
export const duplicate = <T = number>(arr: T[]): T[] => arr.concat(arr)

/**
 * 判断是否有序
 */
export const isOrdered = (arr: number[]): boolean => {
  for (let i = 0; i < arr.length - 1; i ++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }

  return true
}

/**
 * 乱序数组
 * 
 * shuffle of Algorighm 4th.
 * Rearranges the elements of the specified array in uniformly random order.
 * 
 * @usage 通常用来消除输入对于数组排序的影响
 * @param a   the array to shuffle
 * @throws ArgumentsCheckError, if a is null.
 */
export const shuffle = (a: number[]): number[] => StdRandom.shuffleAndReturn(a)

/**
 * 交换数组元素
 * 
 * @param a     source array.
 * @param pos1  fir positon 
 * @param pos2  sec position
 * @throw ArgumentsCheckError, if (a is null OR pos1 or pos2 out of range)
 */
export const swap = <T = number>(a: T[], pos1: number, pos2: number): void => {
  const l = a.length
  if (pos1 < 0 || pos2 < 0 || pos1 >= l || pos2 >= l) 
    throw new ArgumentsCheckError(`pos1: ${pos1} or pos2: ${pos2} out of range.`)
  
  const tmp = a[pos1]
  a[pos1] = a[pos2]
  a[pos2] = tmp
}