export function solution(
  want: string[],
  number: number[],
  discount: string[]
): number {
  const obj: { [key: string]: number } = {};
  const dateAway = number.reduce((acc, cur) => acc + cur, 0);

  for (const index in want) {
    obj[want[index]] = number[index];
  }

  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const discount10d: { [key: string]: number } = {}; // i일 회원가입 시 할인받는 제품 및 개수를 담을 오브젝트
    // i일 회원가입 시 할인받는 제품 및 개수로 오브젝트 구성
    for (let j = i; j < i + 10; j++) {
      if (obj[discount[j]]) {
        // discount10d[discount[j]]가 비어 있다면 0으로 기본값 설정
        discount10d[discount[j]] = (discount10d[discount[j]] || 0) + 1;
      }
    }
    // 할인하는 상품의 개수가 원하는 수량과 일치하면 정답 변수에 1 추가
    if (isShallowEqual(discount10d, obj)) {
      answer += 1;
    }
  }
  return answer;
}

function isShallowEqual(
  object1: { [key: string]: number },
  object2: { [key: string]: number }
): boolean {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);
  if (objKeys1.length !== objKeys2.length) return false;
  for (const key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}