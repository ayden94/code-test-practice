export function solution(s: string) {
  const map = new Map<string, string>(
    [
      [')', '('],
      ['}', '{'],
      [']', '[']
    ]
  );
  let arr: string[] = []
  let answer = 0

  for (let i = 0; i < s.length; i++) {
    arr = []

    const string = s.split("")

    const a = string.splice(0, i)

    for (const char of [...string, ...a]) {
      const mapChar = map.get(char)

      // ) } ] 인지 아닌지 확인
      if (!mapChar) {
        arr.push(char) // ( [ { 인 경우 arr에 넣기
      } else {
        if (arr.at(-1) === mapChar) {
          arr.pop()
        } else {
          arr.push(char)
        }
      }
    }

    if (arr.length === 0) { answer += 1 }
  }

  return answer
}