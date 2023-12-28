function solution(tickets) {
  // 모든 항공권을 사용해야한다.
  // ICN에서 출발한다.
  // DFS를 이용해서 문제를 해결한다.
  const answer = [];
  // 알파벳 순서가 앞서는 경로를 먼저 return
  let visited = Array.from({ length: tickets.length }, () => false);

  const dfs = (start, sum) => {
    for (let i = 0; i < tickets.length; i++) {
      if (!visited.includes(false)) {
        //만약 방문하지 않은곳이 없고 또 아직 answer에 담겨있는 route가 아니면
        //answer에 push
        answer.push(sum);
      }
      if (!visited[i] && tickets[i][0] === start) {
        visited[i] = true;
        dfs(tickets[i][1], sum + "," + tickets[i][1]);
        visited[i] = false;
        // 다른 경우도 체크해주어야하기 때문에 visited 탈출
      }
      // 방문하지 않았고 도착지와 출발지가 겹쳐지면
      // 해당 출발지의 도착지로 날아감
    }
  };
  dfs("ICN", "ICN");

  answer.sort((a, b) => (a > b ? 1 : -1));

  return answer[0].split(`,`);
}
