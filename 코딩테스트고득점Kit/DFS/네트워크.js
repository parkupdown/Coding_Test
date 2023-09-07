function solution(n, computers) {
  // 연결된 곳으로 이동
  // 또 거기서 연결된 곳으로 이동
  // dfs가 끊기면 네트워크가 1개인거
  // current를 저장
  // 지금 내 위치가 아니고 방문안한곳으로 이동
  const visited = Array.from({ length: n }, () => false);

  const dfs = (current) => {
    for (let i = 0; i < n; i++) {
      if (computers[current][i] === 1 && i !== current && !visited[i]) {
        //만약 방문한 네트워크의 연결된 네트워크가 1로연결되어있고
        // i와 current가 다르고(다른 네트워크)
        // 방문하지않은 네트워크라면 이동
        visited[i] = true;

        dfs(i);
        //탈출 x
      }
    }
  };

  let answer = 0;

  for (let i = 0; i < n; i++) {
    //방문안한네트워크부터들어가자
    if (!visited[i]) {
      visited[i] = true;

      dfs(i);
      //한번 순회끝나면 1회 추가
      answer = answer + 1;
    }
  }

  return answer;
}
