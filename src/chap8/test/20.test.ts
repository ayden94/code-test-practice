import { solution } from "../20";

describe("", () => {
  test("완주하지 못한 선수의 이름을 반환하는solution( ) 함수를 작성하세요.", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toStrictEqual("leo");
    expect(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"] )).toStrictEqual("vinko");
    expect(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"] )).toStrictEqual("mislav");
  })
})