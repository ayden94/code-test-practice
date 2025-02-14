export function solution(p: number[], s: number[]) {
  const answer: number[] = [];
  const daysLeft = p.map((progress, i) => Math.ceil((100 - progress) / s[i]));

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < p.length; i++) {
    if (daysLeft[i] <= maxDay) {
    count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }

  answer.push(count);

  return answer;
}