function solution(n, computers) {
  //방문처리를 해주어야함
  //방문처리된 computer는 이미 하나의 네트워크

  const visited = Array.from({ length: computers.length }, () => false);

  const dfs = (i) => {
    for (let j = 0; j < computers[i].length; j++) {
      if (i !== j && computers[i][j] === 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  };
  //모든 컴퓨터가 검사되어야하니까
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      //방문안한곳만 dfs가 돌도록
      dfs(i);
      count++;
    }
  }

  return count;
}

function solution(n, computers) {
  const visited = Array.from({ length: computers.length }, () => false);

  let count = 0;
  const dfs = (index) => {
    for (let i = 0; i < computers.length; i++) {
      if (i !== index && computers[index][i] === 1 && !visited[i]) {
        visited[i] = true;
        //방문해버리고
        dfs(i);
        //그 네트워크로 이동
      }
    }
  };
  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      // 방문안한 네트워크 즉, 독립적인 네트워크가 있다면 count+1
      count++;
    }
  }
  return count;
}
