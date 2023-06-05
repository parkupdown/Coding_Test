function solution(n, computers) {
  const visited = Array.from({ length: computers.length }, () => false);
  let answer = 0;
  const dfs = (index) => {
    for (let j = 0; j < computers.length; j++) {
      if (visited[j] === false && computers[index][j] === 1) {
        visited[j] = true;
        dfs(j);
        //방문안한 컴퓨터이고 그 컴퓨터가 [j]번째 컴퓨터와 연결되어있다면 해당 컴퓨터로 이동 후 방문처리
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (visited[i] === false) {
      dfs(i);
      answer = answer + 1;
      // 그럼 연결된 놈들끼리 방문처리가 끝나면 answer을 하나씩 높여주는거
    }
  }
  return answer;
}
