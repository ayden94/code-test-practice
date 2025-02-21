import { solution } from "../21";

describe("", () => {
  test("완주하지 못한 선수의 이름을 반환하는solution( ) 함수를 작성하세요.", () => {
    expect(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])).toStrictEqual(3);
    expect(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])).toStrictEqual(0);
  })
})
