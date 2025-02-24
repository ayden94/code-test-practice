import { solution } from "../22";

describe("", () => {
  test("완주하지 못한 선수의 이름을 반환하는solution( ) 함수를 작성하세요.", () => {
    expect(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])).toStrictEqual(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
  })
})
