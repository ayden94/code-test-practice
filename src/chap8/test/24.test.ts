import { solution } from "../24";

describe("", () => {
  test("각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 반환하는solution( ) 함수를 완성해주세요.", () => {
    expect(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzineo", "apeach muzi"], 2)).toStrictEqual([2, 1, 1, 0]);
  })
})
