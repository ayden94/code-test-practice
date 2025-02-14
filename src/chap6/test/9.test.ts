import { solution } from '../9'

describe("", () => {
  test("10진수를 입력받아 2진수로 변환해 반환하는 solution( ) 함수를 구현하세요.", () => {
    expect(solution(10)).toStrictEqual("1010");
    expect(solution(27)).toStrictEqual("11011");
    expect(solution(12345)).toStrictEqual("11000000111001");
  })
})