export function solution(n: number, k: number, cmd: string[]): string {
  const deleted: number[] = [];

  const up: number[] = [...new Array(n + 2)].map((_, i) => i - 1);
  const down: number[] = [...new Array(n + 1)].map((_, i) => i + 1);

  k += 1;

  for (const item of cmd) {
    if (item[0] === "C") {
      deleted.push(k);
      up[down[k]] = up[k];
      down[up[k]] = down[k];
      k = n < down[k] ? up[k] : down[k];
    } else if (item[0] === "Z") {
      const restore = deleted.pop()!;
      down[up[restore]] = restore;
      up[down[restore]] = restore;
    } else {
      const [action, numStr] = item.split(" ");
      const num = parseInt(numStr);
      if (action === "U") {
        for (let i = 0; i < num; i++) {
          k = up[k];
        }
      } else {
        for (let i = 0; i < num; i++) {
          k = down[k];
        }
      }
    }
  }

  const answer: string[] = new Array(n).fill("O");
  for (const i of deleted) {
    answer[i - 1] = "X";
  }
  return answer.join("");
}