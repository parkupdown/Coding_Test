function solution(N, road, K) {
  const visited = Array.from({ length: N }, () => false);
  //1번은 먼저 방문하고 시작하니까
  const answer = [];
  const bfs = (currentCity, time) => {
    if (time > K) {
      return;
      //배달 시간 오바하면 종료
    }

    if (!answer.includes(currentCity)) {
      answer.push(currentCity);
    }

    for (let i = 0; i < road.length; i++) {
      //방문안했고 road[i]가 현재 마을과 같다면 Go
      if (!visited[i] && road[i][0]) {
        if (road[i][0] === currentCity) {
          visited[i] = true;
          bfs(road[i][1], time + road[i][2]);
          visited[i] = false;
        } else if (road[i][1] === currentCity) {
          visited[i] = true;
          bfs(road[i][0], time + road[i][2]);
          visited[i] = false;
        }
      }
    }
  };

  bfs(1, 0);

  return answer.length;
}
