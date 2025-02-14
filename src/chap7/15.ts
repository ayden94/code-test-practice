export function solution(n: number, k: number) {
  const arr = Array.from({ length: Number(n) }, (_, i) => i + 1);

  while (arr.length !== 1) {
    for (let i = 0; i < k - 1; i++) {
      arr.push(arr.shift()!);
    }
    arr.shift();
  }

  return arr[0]
}