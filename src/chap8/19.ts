export function solution(sL: string[], qL: string[]) {
  const obj = {};
  const answer: boolean[] = [];

  for (const value of sL) {
    obj[value] = 1;
  }

  for (const value of qL) {
    if (obj[value]) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}