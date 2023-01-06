// 정답률 53프로 level2
// 바로 앞번호의 학생이나 바로 뒷번호의 학생에게 빌려준다.

// 안가져온 학생 기준 왼쪽 먼저 탐색하고 오른쪽탐색
// 빌려주면 바로 삭제
const n = 5;

const lost = [2, 4];

const reserve = [1, 3, 5];

function makeReserve(lost, reserve) {
  const filteredReserve = reserve.filter(
    (item) => lost.includes(item) === false
  );

  return filteredReserve;
}

function solution(n, lost, reserve) {
  const haveStudent = [];
  const filteredReserve = makeReserve(lost, reserve);
}

solution(n, lost, reserve);
