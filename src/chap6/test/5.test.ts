import { solution } from '../5'

describe("", () => {
  test("각 초의 주가를 기준으로 해당 초부터 n초 사이에 가격이 떨어지지 않은 시간은 몇 초인지 배열에 담아 반환하는 solution() 함수를 완성하세요.", () => {
    expect(solution([1, 2, 3, 2, 3])).toStrictEqual([4, 3, 1, 1, 0]);
  })
})