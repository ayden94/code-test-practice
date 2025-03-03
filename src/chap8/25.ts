export function solution(orders: string[], course: number[]): string[] {
  const answer: string[] = [];

  for (const c of course) {
    const menu: string[][] = [];
    for (const order of orders) {
      const orderArr = order.split("").sort();

      const comb = combinations(orderArr, c);
      menu.push(...comb);
    }

    const counter: { [key: string]: number } = {};
    for (const m of menu) {
      const key = m.join('');
      counter[key] = (counter[key] || 0) + 1;
    }
    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      for (const [key, value] of Object.entries(counter)) {
        if (value === max) {
          answer.push(key);
        }
      }
    }
  }
  return answer.sort();
}

function combinations<T>(arr: T[], n: number): T[][] {
  if (n === 1) return arr.map((v) => [v]);

  const result: T[][] = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);

    const combis = combinations(rest, n - 1);

    const combine = combis.map((v) => [fixed, ...v]);

    result.push(...combine);
  });
  return result;
}