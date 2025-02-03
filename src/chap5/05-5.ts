export function solution(arr: Array<number>) {
  return [...new Set(arr)].sort((a, b) => b - a);
}