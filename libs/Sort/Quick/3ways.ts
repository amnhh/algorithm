/**
 * 三路快排实现
 * 
 * 针对于重复元素很多的序列，三路快排可以将 O(n·lgn) 缩短至线性级别
 */

import { shuffle, swap } from '../../../utils/lang/Array'

const quickIn3Way = (a: number[]): void => {
  shuffle(a)
  _quickIn3Way(a, 0, a.length - 1)
}

export default quickIn3Way

/**
 * 三路快排的具体的实现方法
 * @param a 
 * @param lo 
 * @param hi 
 */
const _quickIn3Way = (a: number[], lo: number, hi: number) => {
  if (lo >= hi) return
  let lt = lo,
    gt = hi,
    i = lo + 1

  // 标志位
  const pivot = a[lo]
  
  // 保证 a[lo ... lt - 1] < pivot, a[lt ... gt] = pivot, a[gt+1 ... hi] > pivot
  while (i <= gt) {
    if (a[i] === pivot) i ++
    else if (a[i] > pivot) swap(a, i, gt--)
    else swap(a, i++, lt++)
  }

  _quickIn3Way(a, lo, lt - 1)
  _quickIn3Way(a, gt + 1, hi)
}