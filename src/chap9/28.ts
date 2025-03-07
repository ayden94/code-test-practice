export function solution(n: number, a: number, b: number): number {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer += 1;
  }
  return answer;
}