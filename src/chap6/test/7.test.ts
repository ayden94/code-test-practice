import { solution } from '../7'

describe("", () => {
  test("명령어 기반으로 표의 행을 선택, 삭제, 복구하는 프로그램을 작성하는 과제를 맡았습니다", () => {
    expect(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"] )).toStrictEqual("OOOOXOOO");
    expect(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"] )).toStrictEqual("OOXOXOOO");
  })
})