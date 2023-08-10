function solution(n, computers) {
  // 만약 아직 방문하지 않은 네트워크라면 들어가
  // 그 다음 배열 내부에 1이 있는지를 확인하고 이게 방문하지 않은 index일경우
  // 해당 index의 네트워크로 이동

  const visited = Array.from({ length: n }, () => false);

  const dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  };

  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      answer++;
      dfs(i);
      //여기서 dfs로 들어간다.
    }
  }
  return answer;
}
