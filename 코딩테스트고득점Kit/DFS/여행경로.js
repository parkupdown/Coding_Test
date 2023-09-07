function solution(tickets) {
  //DFS로짜보자
  // 그럼 일단 연결된 곳은 모두 방문할 수 있어야함
  // 총 몇개의 공항이 있는지를 알아야함
  const visited = Array.from({ length: tickets.length }, () => false);
  //모든티켓써야하니까
  let answer = [];

  const dfs = (current, route) => {
    if (!visited.includes(false)) {
      //방문안한곳이 없다면?
      answer.push(route);
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (current === tickets[i][0] && !visited[i]) {
        //만약 출발지가 현재 위치와같고 사용안한티켓이면 거기로가
        visited[i] = true;
        dfs(tickets[i][1], route + "," + tickets[i][1]);
        visited[i] = false;
      }
    }
  };
  dfs("ICN", "ICN");

  answer.sort((a, b) => (a > b ? 1 : -1));

  return answer[0].split(`,`);
}
