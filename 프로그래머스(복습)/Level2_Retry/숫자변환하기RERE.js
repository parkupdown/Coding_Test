function solution(x, y, n) {
  let answer = 1000000;
  // 완전탐색
  // x에 3곱하고 2곱하고 n더하는걸 완전탐색으로
  // 곱하는 연산을 어떻게?

  const dfs = (x, count) => {
    if (x >= y) {
      if (x === y && answer > count) {
        answer = count;
      }
      return;
    }
    dfs(x * 3, count + 1);
    dfs(x * 2, count + 1);
    dfs(x + n, count + 1);
  };
  dfs(x, 0);

  return answer === 1000000 ? -1 : answer;
}
// 시간 오버
function solution(x, y, n) {
  let answer = 1000000;
  // 완전탐색
  // x에 3곱하고 2곱하고 n더하는걸 완전탐색으로
  // 곱하는 연산을 어떻게?

  const dfs = (y, count) => {
    if (x >= y) {
      if (x === y && answer > count) {
        answer = count;
      }
      return;
    }
    dfs(y / 3, count + 1);
    dfs(y / 2, count + 1);
    dfs(y - n, count + 1);
  };
  dfs(y, 0);

  return answer === 1000000 ? -1 : answer;
}
