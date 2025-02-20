import { solution } from '../19'

describe("", () => {
  test("각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution() 함수를 작성해주세요.", () => {
    expect(solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])).toStrictEqual([true, false, false, true]);
  })
})