import { solution } from './05-4'

describe("정수 배열을 정렬해서 반환하는 solution( ) 함수를 완성하세요.", () => {
  test("정수 배열을 정렬해서 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution([1, -5, 2, 4, 3])).toStrictEqual([-5, 1, 2, 3, 4]);
    expect(solution([2, 1, 1, 3, 2, 5, 4] )).toStrictEqual([1, 1, 2, 2, 3, 4, 5]);
    expect(solution([6, 1, 7])).toStrictEqual([1, 6, 7]);
  })
})