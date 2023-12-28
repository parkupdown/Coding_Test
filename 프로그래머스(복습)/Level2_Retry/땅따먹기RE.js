function solution(land) {
  // 어떻게 가는게 가장 큰지를 확인해야함
  // 같은걸 밟을 수 없으니까 dfs로 풀어야하나?
  let answer = 0;

  const dfs = (index, recentIndex, sum) => {
    if (index === land.length) {
      if (answer < sum) {
        answer = sum;
      }
      return;
    }

    for (let i = 0; i < 4; i++) {
      if (recentIndex !== i) {
        dfs(index + 1, i, sum + land[index][i]);
      }
    }
  };
  dfs(0, 4, 0);

  return answer;
}
//dfs로 푸니 시간초과
