/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */


// 0부터 9까지의 숫자를 나타내는 유니온 타입
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// 숫자를 문자열로 표현한 타입 (예: "0", "1", ..., "9")
type DigitStr = `${Digit}`;

// 각 숫자보다 큰 숫자들의 집합을 정의한 타입 사전
// 예: "0"보다 큰 숫자는 1~9, "5"보다 큰 숫자는 6~9 등
type GreaterThanDict = {
  "0": Exclude<DigitStr, "0">;
  "1": Exclude<DigitStr, "0" | "1">;
  "2": Exclude<DigitStr, "0" | "1" | "2">;
  "3": Exclude<DigitStr, "0" | "1" | "2" | "3">;
  "4": Exclude<DigitStr, "0" | "1" | "2" | "3" | "4">;
  "5": "6" | "7" | "8" | "9";
  "6": "7" | "8" | "9";
  "7": "8" | "9";
  "8": "9";
  "9": never; // 9보다 큰 한 자리 숫자는 없음
};

// 두 개의 단일 자릿수를 비교하여 첫 번째가 두 번째보다 큰지 확인하는 타입
type GreaterThanDigitVersion<
  D1 extends DigitStr,
  D2 extends DigitStr
> = D1 extends GreaterThanDict[D2] ? true : false;

// 문자열이 음수인지 확인하는 타입 (- 기호로 시작하는지 검사)
type IsNegative<T extends string> = T extends `-${string}` ? true : false;

// 문자열로 표현된 숫자의 절대값을 구하는 타입 (음수 부호 제거)
type Abs<T extends string> = T extends `-${infer R}` ? R : T;

// 숫자 문자열을 개별 자릿수 문자열의 배열로 변환하는 타입
// 예: "123" → ["1", "2", "3"]
type NumStrToDigitStrArr<
  NumStr extends string,
  Result extends unknown[] = []
> = NumStr extends `${infer L}${infer Rest}`
  ? NumStrToDigitStrArr<Rest, [...Result, L]>
    : Result extends DigitStr[] 
    ? Result
  : never;

// 숫자를 개별 자릿수 문자열의 배열로 변환하는 타입
// 음수의 경우 절대값을 사용함
type NumToDigitStrArr<N extends number> = NumStrToDigitStrArr<Abs<`${N}`>>;

// 두 개의 자릿수 배열을 비교하여 첫 번째가 두 번째보다 큰지 확인하는 타입
type GreaterThanDigitArrayVersion<
  TA extends DigitStr[],
  UA extends DigitStr[],
  NumTDigits extends number = TA["length"],
  NumUDigits extends number = UA["length"]
> = NumTDigits extends NumUDigits
  ? TA extends [
      infer TDigit extends DigitStr,
      ...infer TRest extends DigitStr[]
    ]
    ? UA extends [
        infer UDigit extends DigitStr,
        ...infer URest extends DigitStr[]
      ]
      ? GreaterThanDigitVersion<TDigit, UDigit> extends true
        ? true // 첫 자리가 크면 전체가 큼
        : GreaterThanDigitVersion<UDigit, TDigit> extends true
        ? false // 첫 자리가 작으면 전체가 작음
        : GreaterThanDigitArrayVersion<TRest, URest> // 첫 자리가 같으면 나머지 자리 비교
      : never
    : false
  : GreaterThan<NumTDigits, NumUDigits>; // 자릿수가 다르면 자릿수로 비교 (자릿수가 많은 쪽이 큼)

// 두 숫자를 비교하여 첫 번째가 두 번째보다 큰지 확인하는 타입
type GreaterThan<
  T extends number,
  U extends number,
> = IsNegative<`${T}`> extends true
  ? IsNegative<`${U}`> extends true
    // 둘 다 음수: 절대값이 작은 수가 더 큼 (예: -1 > -2)
    ? GreaterThanDigitArrayVersion<NumToDigitStrArr<U>, NumToDigitStrArr<T>>
    // T는 음수, U는 양수 또는 0: 항상 U가 더 큼
    : false
  : IsNegative<`${U}`> extends true
    // T는 양수 또는 0, U는 음수: 항상 T가 더 큼
    ? true
    // 둘 다 양수 또는 0: 일반 비교
    : GreaterThanDigitArrayVersion<NumToDigitStrArr<T>, NumToDigitStrArr<U>>;

// 첫 번째 숫자가 두 번째 숫자보다 크거나 같은지 확인하는 타입
type GreaterThanOrEqual<
  T extends number,
  U extends number,
> = `${T}` extends `${U}`
  ? true // 두 숫자가 같으면 true
  : GreaterThan<T, U>; // 다르면 크기 비교 수행

type Numeric = number | `${number}`
type NumericToNumber<T extends Numeric> = T extends `${infer N extends number}` ? N : T extends number ? T : never

type IsInRange<Target extends Numeric, Min extends Numeric, Max extends Numeric> =
  GreaterThanOrEqual<NumericToNumber<Target>, NumericToNumber<Min>> extends true
    ? GreaterThanOrEqual<NumericToNumber<Max>, NumericToNumber<Target>> extends true
      ? Target
      : never
    : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
