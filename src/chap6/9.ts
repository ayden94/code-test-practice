export function solution(number: number) {
  const answer: number[] = [];

  while (number > 0) {
    answer.push(number % 2);
    number = Math.floor(number / 2);
  }

  return answer.reverse().join("");
}