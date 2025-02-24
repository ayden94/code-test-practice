export function solution(record: string[]) {
  const nicknameMap = new Map<string, string>();
  const answer: string[] = [];

  record.map(r => r.split(' ')).reverse().forEach(([command, uid, nickname]) => {
    if (!nicknameMap.get(uid)) {
      nicknameMap.set(uid, nickname);
    }
  });

  record.map(r => r.split(' ')).forEach(([command, uid, nickname]) => {
    if (command === 'Enter') {
      answer.push(`${nicknameMap.get(uid)}님이 들어왔습니다.`);
    } else if (command === 'Leave') {
      answer.push(`${nicknameMap.get(uid)}님이 나갔습니다.`);
    }
  })

  return answer;
}