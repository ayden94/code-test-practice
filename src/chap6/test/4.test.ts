import { solution } from '../4'

describe("", () => {
  test("문자열 S가 주어졌을 때 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성하세요", () => {
    expect(solution("baabaa")).toStrictEqual(1);
    expect(solution("cdcd")).toStrictEqual(0);
  })
})