import { solution } from '../16'

describe("", () => {
  test("각 배포마다 몇 개의 기능이 배포되는지를 반환하도록 solution( ) 함수를 완성하세요.", () => {
    expect(solution([93, 30, 55], [1, 30, 5])).toStrictEqual([2, 1]);
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1] )).toStrictEqual([1, 3, 2]);
  })
})