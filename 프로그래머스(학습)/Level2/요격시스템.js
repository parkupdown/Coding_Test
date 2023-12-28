function solution(targets) {
  // 오른쪽이 왼쪽보다 크고 오른쪽이 오른쪽보다 작은
  // 왼쪽이 오른쪽보다 작고 왼쪽보다 큰
  // 그냥 아예 둘다 작은 경우
  const visited = Array.from({ length: targets.length }, () => false);

  const dfs = (t) => {
    for (let i = 0; i < targets.length; i++) {
      if (!visited[i]) {
        if (
          (t[0] < targets[i][1] && t[1] > targets[i][1]) ||
          (t[0] < targets[i][0] && t[1] > targets[i][0]) ||
          (t[0] === targets[i][0] && t[1] === targets[i][1])
        ) {
          visited[i] = true;
          dfs(targets[i]);
        }
      }
    }
  };

  let answer = 1;
  for (let i = 0; i < targets.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(targets[i]);
      answer++;
    }
  }
  return answer;
}
