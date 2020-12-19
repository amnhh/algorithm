const _argumentCheckMsg = 'argument check error.'
export class ArgumentsCheckError extends Error{
  constructor(msg: string) {
    super(`[ArgumentsCheckError]: ${msg || _argumentCheckMsg}`)
  }
}