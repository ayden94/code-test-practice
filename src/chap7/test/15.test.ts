import { solution } from '../15'

describe("", () => {
  test("N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution( ) 함수를 구현해주세요.", () => {
    expect(solution(5, 2)).toStrictEqual(3);
  })
})