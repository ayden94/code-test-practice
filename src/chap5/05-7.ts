export function solution(arr: Array<number>): Array<number> {
  const Guess_Array = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ]
  const res = new Array(Guess_Array.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const answer = arr[i];

    for (const index in Guess_Array) {
      const man = Guess_Array[index]

      if (man[i % man.length] === answer) {
        res[index] += 1
      }
    }
  }

  const max = Math.max(...res)
  const guys: Array<number> = []

  for (const [p, v] of Object.entries(res)) {
    if (v === max) {
        guys.push(Number(p) + 1)
    }
  }

  return guys
}
