import { solution } from "../5"

test("2차원 행렬 arr1과 arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 solution( ) 함수를 완성하세요.", () => {
  expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toStrictEqual([[15, 15], [15, 15], [15, 15]]);
  expect(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])).toStrictEqual([[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
})