export function solution(c1: string[], c2: string[], g: string[]) {
  let answer = true;

  for (const item of g) {
    if (c1[0] === item) {
      c1.shift();
    }
    else if (c2[0] === item) {
      c2.shift();
    }
    else {
      answer = false;
      break;
    }
  }

  return answer ? "Yes" : "No";
}