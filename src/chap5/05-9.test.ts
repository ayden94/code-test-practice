import { solution } from "./05-9"

test("2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution( ) 함수를 완성하세요.", () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3] )).toStrictEqual([3, 4, 2, 1, 5]);
  expect(solution(4, [4, 4, 4, 4, 4] )).toStrictEqual([4, 1, 2, 3]);
})