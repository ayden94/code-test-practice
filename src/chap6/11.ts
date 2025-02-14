export function solution(
  s: string
) {
  const arr: string[] = []

  for (const char of s) {
    if (arr.at(-1) === char) {
      arr.pop()
    } else {
      arr.push(char)
    }
  }

  return arr.length === 0 ? 1 : 0
}