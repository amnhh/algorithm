import { shuffle, swap } from "../../../utils/lang/Array"

/**
 * 对外暴露的 quick sort 方法
 */
const quickSort = (a: number[]): void => {
  shuffle(a)
  _sort(a, 0, a.length - 1)
}

export default quickSort

/**
 * 携带多个参数的快排内部方法
 * 
 * @param a   待排序的数组
 * @param lo  起始位置
 * @param hi  结束位置
 */
const _sort = (a: number[], lo: number, hi: number): void => {
  if (lo >= hi) return
  // pivotPos 为该元素最终的位置
  // 依据这个标志位，可以将数组拆分为 [lo, pivotPos), (pivotPos, hi] 两部分，再递归的去排即可
  const pivotPos = partition(a, lo, hi)
  _sort(a, lo, pivotPos - 1)
  _sort(a, pivotPos + 1, hi)
}

/**
 * 切分数组
 * 
 * 过程：
 *    将数组切分成 a[lo .. i-1], a[i], a[i+1 .. hi], 同时保证：
 *      a[lo ... i-1] <= pivot
 *      a[i+1 ... hi] >= pivot
 *    此时交换 a[lo] 和 a[i] 的位置，即：
 *      确定 pivot 这个点位于其最终的位置上，并且保证了左边都小于基准，右边都大于基准
 * 
 * @param a   待排序的数组
 * @param lo  起始位置
 * @param hi  结束位置
 */
const partition = (a: number[], lo: number, hi: number): number => {
  let i = lo, j = hi + 1

  // 基准值
  const pivot = a[lo]
  
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // 扫描左右，检查是否结束
    while (a[++i] < pivot) if (i === hi) break
    while (a[--j] > pivot) if (j === lo) break
    if (i >= j) break
    
    // 交换元素
    swap(a, i, j)
  }

  // 最终还需要交换一次标志和 i 的位置，保证 [lo, i]
  swap(a, lo, j)

  return j
}