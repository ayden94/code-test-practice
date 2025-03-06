import { solution } from '../27'

describe("", () => {
  test("이진 탐색 트리에서 찾을 수 있는지 확인하여true 또는 false를 담은 배열 result를 반환하는 함수 solution( )을 작성하세요.", () => {
    expect(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6])).toStrictEqual([true, true, true, false]);
    expect(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).toStrictEqual([false, false, false, false, false]);
  })
})

