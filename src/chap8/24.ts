export function solution(id_list: string[], report: string[], k: number): number[] {
  const reportedUser: { [key: string]: Set<string> } = {}; // 신고당한 유저 - 신고 유저 집합을 저장할 오브젝트
  const count: { [key: string]: number } = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(' ');
    if (reportedUser[reportedId] === undefined) { // 신고당한 기록이 없다면
      reportedUser[reportedId] = new Set();
    }
    reportedUser[reportedId].add(userId); // 신고한 사람의 아이디를 집합에 담아 오브젝트에 연결
  }

  // 신고당한 유저별로 신고당한 횟수를 확인
  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) { // 정지 기준에 만족하는지 확인
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const answer: number[] = [];
  // 각 아이디별 메일을 받은 횟수를 순서대로 정리
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}