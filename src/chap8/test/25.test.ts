import { solution } from "../25";

describe("", () => {
  test("각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 반환하는solution( ) 함수를 완성해주세요.", () => {
    expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])).toStrictEqual(["AC", "ACDE", "BCFG", "CDE"]);
    expect(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])).toStrictEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
    expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toStrictEqual(["WX", "XY"]);
  })
})