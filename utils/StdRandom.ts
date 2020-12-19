import { ARRAY_CONSTANTS } from './constants'
import { ArgumentsCheckError } from './error'
import { EDirection, ENumberType } from './enums'

const execMathRandom = (n: number) => Math.random() * n

/**
 * 标准 random
 * 参考自：https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/StdRandom.java.html
 */
export default class StdRandom {
  private seed: number

  constructor(n = ARRAY_CONSTANTS.DEFAULT_LENGTH) {
    this.seed = n
  }

  /**
   * 重新设置随机种子
   * set the seed of the random Creator.
   * 
   * @param n seed of Random std.
   */
  setSeed(n: number): void {
    this.seed = n
  }

  /**
   * 返回设置的随机种子
   * Returns the seed of the random Creator.
   * 
   * @returns the seed.
   */
  getSeed(): number {
    return this.seed
  }

  /**
   * 乱序输入
   * Rearranges the elements of the specified array in uniformly random order.
   * 
   * @param a a the array to shuffle
   * @throws ArgumentsCheckError, if a is null.
   */
  static shuffle(a: number[]): void {
    StdRandom.validateNotNull(a)
    const len = a.length
    for (let i = 0; i < len; i ++) {
      const r = i + this.uniform(len - i)
      const tmp = a[i]
      a[i] = a[r]
      a[r] = tmp
    }
  }

  /**
   * 乱序输入的数组，并返回
   * 
   * @param a the array to shuffle
   * @throws ArgumentsCheckError, if a is null.
   */
  static shuffleAndReturn(a: number[]): number[] {
    this.shuffle(a)
    return a
  }

  /**
   * 检验是否为 null
   * 
   * @param x anything.
   * @throws ArgumentsNullCheckError,  if x is null
   */
  static validateNotNull(x: unknown): void {
    if (x === null) throw new ArgumentsCheckError('arguments must not be null')
  }

  /**
   * 返回一个 [0, n) 的整数
   * Returns a random integer uniformly in [0, n).
   * 
   * @param n number of passible integers
   * @returns a random integer unformly between 0
   * @throws ArgumentsNullCheckError, if n <= 0
   */
  static uniform(n: number, type = ENumberType.INTEGER): number {
    if (n <= 0) throw new ArgumentsCheckError(`arguments be positive: ${n}`)
    return type === ENumberType.INTEGER
      ? this.integerizate(execMathRandom(n))
      : execMathRandom(n)
  }

  /**
   * 整数化某个值
   * transform a number into integer.
   * @param n 
   * @param direction 
   */
  static integerizate(n: number, direction = EDirection.DOWN): number {
    const method = direction === EDirection.DOWN ? Math.floor : Math.ceil
    return method(n)
  }
}