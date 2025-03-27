/*
  3326 - BEM style string
  -------
  by Songhn (@songhn233) #medium #template-literal #union #tuple

  ### Question

  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

  For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).

  > View on GitHub: https://tsch.js.org/3326
*/

/* _____________ Your Code Here _____________ */

// type BEM<B extends string, E extends string[], M extends string[]> =
//   M extends Array<infer Last> // 언제나 참인 조건
//     ? [Last] extends [never] // Last가 never 인지 판단해야해
//      ? E extends Array<infer Middle> // Last가 never인 경우, E가 배열인지 판단해야해 일단 이 조건은 언제나 참이야
//        ? [Middle] extends [never] // E가 배열인 경우, Middle이 never인지 판단해야해
//           ? B // Last가 never이고 Middle이 never인 경우
//           : Middle extends string // Last가 never이고 Middle이 never가 아닌 경우 (타입캐스팅 시도)
//             ? `${B}__${Middle}`
//             : never
//         : never
//      : E extends Array<infer Middle> // Last가 never가 아닌 경우, E가 배열인지 판단해야해 일단 이 조건은 언제나 참이야
//         ? [Middle] extends [never] // E가 배열인 경우, Middle이 never인지 판단해야해
//           ? Last extends string
//             ? `${B}--${Last}` // Last가 never가 아니고 Middle이 never인 경우
//             : never
//           : Last extends string
//             ? Middle extends string
//               ? `${B}__${Middle}--${Last}` // Last가 never가 아니고 Middle이 never가 아닌 경우
//               : never
//             : never
//         : never
//     : never

type BEM<B extends string, E extends string[],M extends string[]> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success' >>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large' >>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3326/answer
  > View solutions: https://tsch.js.org/3326/solutions
  > More Challenges: https://tsch.js.org
*/
