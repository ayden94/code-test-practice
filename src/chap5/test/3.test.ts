import { solution } from "../3";

test("정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution( ) 함수를 완성하세요.", () => {
  expect(solution([2, 1, 3, 4, 1])).toStrictEqual([2, 3, 4, 5, 6, 7]);
  expect(solution([5, 0, 2, 7])).toStrictEqual([2, 5, 7, 9, 12]);
})