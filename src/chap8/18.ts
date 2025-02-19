export function solution(arr: number[], target: number) {
  const obj = {};

  for (const value of arr) {
    obj[value] = 1;
  }

  for (let i = 1; i < target; i++) {
    const a = target - i;
    const b = i;
    if (obj[a] && obj[b] && a !== b) {
      return true;
    }
  }

  return false;
}