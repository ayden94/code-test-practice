import { solution } from '../26'

describe("", () => {
  test("원하는 단어 배열 goal이 매개변수로 주어질 때 cards1과 cards2에 적힌 단어들로 goal를 만들 수 있다면 Yes를, 만들 수 없다면 No를 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7])).toStrictEqual(["1 2 4 5 3 6 7", "4 2 5 1 6 3 7", "4 5 2 6 7 3 1"]);
  })
})
