import { solution } from "../23";

describe("", () => {
  test("완주하지 못한 선수의 이름을 반환하는solution( ) 함수를 작성하세요.", () => {
    expect(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])).toStrictEqual([4, 1, 3, 0]);
  })
})
