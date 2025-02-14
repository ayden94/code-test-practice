import { solution } from '../10'

describe("", () => {
  test("s가 올바른 괄호 문자열이 되게 하는 x의 개수를 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution("[](){}")).toStrictEqual(3);
    expect(solution("}]()[{")).toStrictEqual(2);
    expect(solution("[)()]")).toStrictEqual(0);
    expect(solution("}}}")).toStrictEqual(0);
  })
})