import { solution } from './05-5'

test("정수 배열을 하나 받습니다. 배열의 중복값을 제거하고 배열 데이터를 내림차순으로 정렬해서 반환하는 solution( ) 함수를 구현하세요.", () => {
  expect(solution([4, 2, 2, 1, 3, 4])).toStrictEqual([4, 3, 2, 1]);
  expect(solution([2, 1, 1, 3, 2, 5, 4])).toStrictEqual([5, 4, 3, 2, 1]);
})
