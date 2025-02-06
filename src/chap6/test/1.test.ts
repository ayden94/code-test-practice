import { solution } from '../1'

describe("정수 배열을 정렬해서 반환하는 solution( ) 함수를 완성하세요.", () => {
  test("정수 배열을 정렬해서 반환하는 solution( ) 함수를 완성하세요.", () => {
    expect(solution("(())()")).toStrictEqual(true);
    expect(solution("((())()")).toStrictEqual(false);
  })
})