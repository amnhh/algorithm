import { ArrayLang } from '../lang'

const { disorder, unique, duplicate } = ArrayLang
/**
 * 初始化空数组
 */
export const genEmptyArr = (size: number = 10): null[] => Array(size).fill(null)

/**
 * 初始化有序数组（由下标填充）
 */
export const genSortedArrWithIdx = (size: number = 10): number[] => genEmptyArr(size).map((v, i) => i)

/**
 * 初始化无序数组
 */
export const genUnsortedFilledArr = (size: number = 10): number[] => genSortedArrWithIdx(size).map(v => Math.floor(v + Math.random() * size))

/**
 * 带有重复元素的乱序数组
 * 初始化 -> 添加重复元素 -> 乱序
 */
export const genDuplicateUnsortedArr = (size: number = 10): number[] => disorder(duplicate(genSortedArrWithIdx(size)))

/**
 * 不带重复元素的乱序数组
 * 初始化 -> 唯一化 -> 乱序
 */
export const genUnduplicateUnsortedArray = (size: number = 10): number[] => disorder(unique(genUnsortedFilledArr(size)))
