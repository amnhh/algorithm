/**
 * 数组乱序
 */
export const disorder = (arr: number[]): number[] => arr.sort(() => Math.random() - Math.random())

/**
 * 数组去重
 */
export const unique = (arr: number[]): number[] => [...new Set([...arr])]

/**
 * 添加重复元素
 */
export const duplicate = (arr: number[]): number[] => arr.concat(arr)

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