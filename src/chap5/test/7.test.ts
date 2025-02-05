import { solution } from "../7"

test("명령어가 매개변수 dirs로 주어질 때 게임 캐릭터가 처음 걸어본 길의 길이를 구해 반환하는 solution( ) 함수를 완성하세요.", () => {
  expect(solution("ULURRDLLU")).toStrictEqual(7);
  expect(solution("LULLLLLLU")).toStrictEqual(7);
})