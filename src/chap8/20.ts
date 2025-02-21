export function solution(participant: string[], completion: string[]) {
  const completionObj = {};

  for (const name of completion) {
    if (completionObj[name]) {
      completionObj[name]++;
    } else {
      completionObj[name] = 1;
    }
  }

  for (const name of participant) {
    if (completionObj[name]) {
      completionObj[name]--;
    } else {
      return name;
    }
  }
}