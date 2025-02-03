import { solution } from "./05-7";

test("정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 반환하는 solution( ) 함수를 완성하세요.", () => {
  expect(solution([1, 2, 3, 4, 5])).toStrictEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toStrictEqual([1, 2, 3]);
})