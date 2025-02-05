export function solution(arr1: Array<Array<number>>, arr2:Array<Array<number>>): Array<Array<number>> {
  const answer: Array<Array<number>> = [];
    
  for (const arr of arr1) {
      let sol: Array<number> = []
      
      // arr2의 가로 길이
      for (let j = 0; j < arr2[0].length; j++) {
          // arr2의 세로 길이
          let number = 0
          
          for (let i = 0; i < arr2.length; i++) {
              number += arr[i] * arr2[i][j]
          }
          
          sol.push(number)
      }
      
      answer.push(sol)
  }

  return answer;
}