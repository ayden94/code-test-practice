export function solution(N: number, stages: Array<number>) {
  var answer: Array<Array<number>> = []
  
  let user = stages.length
  for (let i = 1; i <= N; i++) {
    const stuckedUser = stages.filter((item) => item === i).length    
    answer.push([i, stuckedUser/user])
    user -= stuckedUser
  }
  
  return answer.sort((a, b) => b[1] - a[1] ).map((stage, index) => stage[0]);
}