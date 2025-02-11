export function solution(board: Array<Array<number>>, moves: Array<number>): number {
  var answer = 0;
  let stack: Array<number> = []
  
  // moves
  for (const i of moves) {
    for (const j in board) {
      let place = board[j][i-1]
      
      if (place === 0) continue
        else {
          if (stack[stack.length - 1] === place) {
            stack.pop()
            answer+=2
          } else {
            stack.push(place)
          }
              
        board[j][i-1] = 0
        break
        }
    }
  }  
  
  return answer;
}