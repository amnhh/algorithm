import { ArrayLang } from '../lang'
import { ARRAY_CONSTANTS } from '../constants'

const { disorder, unique, duplicate } = ArrayLang
/**
 * 初始化空数组
 */
export const genEmptyArr = (size = ARRAY_CONSTANTS.DEFAULT_LENGTH): null[] => Array(size).fill(null)

/**
 * 初始化有序数组（由下标填充）
 */
export const genSortedArrWithIdx = (size = ARRAY_CONSTANTS.DEFAULT_LENGTH): number[] => genEmptyArr(size).map((v, i) => i)

/**
 * 初始化无序数组
 */
export const genUnsortedFilledArr = (size = ARRAY_CONSTANTS.DEFAULT_LENGTH): number[] => genSortedArrWithIdx(size).map(v => Math.floor(v + Math.random() * size))

/**
 * 带有重复元素的乱序数组
 * 初始化 -> 添加重复元素 -> 乱序
 */
export const genDuplicateUnsortedArr = (size = ARRAY_CONSTANTS.DEFAULT_LENGTH): number[] => disorder(duplicate(genSortedArrWithIdx(size)))

/**
 * 不带重复元素的乱序数组
 * 初始化 -> 唯一化 -> 乱序
 */
export const genUnduplicateUnsortedArray = (size = ARRAY_CONSTANTS.DEFAULT_LENGTH): number[] => disorder(unique(genUnsortedFilledArr(size)))

/**
 * 代理 js 原生的 sort 函数
 */
export const nativeSort = (a: number[]): number[] => a.sort((v1, v2) => v1 - v2)
