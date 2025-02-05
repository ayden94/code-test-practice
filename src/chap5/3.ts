export function solution(arr: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push(arr[i] + arr[j])
    }
  }

  return [...new Set(result.sort((a, b) => a - b))];
}
