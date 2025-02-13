export function solution(arr: Array<number>) {
  let answer: Array<number> = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        answer.push(j - i)
        break
      }
    }

    if (answer.length === i) answer.push(arr.length - i - 1)
  }

  return answer
}