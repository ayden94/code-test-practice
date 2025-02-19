import { solution } from '../18'

describe("", () => {
  test("원하는 단어 배열 goal이 매개변수로 주어질 때 cards1과 cards2에 적힌 단어들로 goal를 만들 수 있다면 Yes를, 만들 수 없다면 No를 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution([1, 2, 3, 4, 8], 6)).toStrictEqual(true);
    expect(solution([2, 3, 5, 9], 10)).toStrictEqual(false);
  })
})