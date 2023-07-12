function solution(storey) {
  storey = String(storey)
    .split(``)
    .reverse()
    .map((item) => parseInt(item));
  let answer = 999999999;
  const dfs = (sum, target, index) => {
    if (index === storey.length - 1) {
      const plus = sum + 10 - target + 1;
      const minus = sum + target;

      if (answer > plus) {
        answer = plus;
      }
      if (answer > minus) {
        answer = minus;
      }
      return;
    }

    //더하기
    dfs(sum + 10 - target, storey[index + 1] + 1, index + 1);
    //빼기
    dfs(sum + target, storey[index + 1], index + 1);
  };

  dfs(0, storey[0], 0);

  return answer;
}
