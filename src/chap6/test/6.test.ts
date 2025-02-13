import { solution } from '../6'

describe("", () => {
  test("2차원 배열 board와 인형을 집는 크레인을 작동시킨 위치가 담긴 배열 moves가 주어질 때, 크레인을 모두 작동시킨 후 사라진 인형 개수를 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])).toStrictEqual(4);
  })
})