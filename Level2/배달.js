function solution(N, road, K) {
  const visited = Array.from({ length: N }, () => false);
  //1번은 먼저 방문하고 시작하니까
  const answer = [];
  const dfs = (currentCity, time) => {
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
          dfs(road[i][1], time + road[i][2]);
          visited[i] = false;
        } else if (road[i][1] === currentCity) {
          visited[i] = true;
          dfs(road[i][0], time + road[i][2]);
          visited[i] = false;
        }
      }
    }
  };

  dfs(1, 0);

  return answer.length;
}

function solution(N, road, K) {
  const visited = Array.from({ length: road.length }, () => false);

  let queue = [[1, K]];
  // 1에서 출발하니까 [0]은 현재위치
  // [1]은 hp
  let answer = [1];
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      //queue의 해당 뿌리를 모두 탐색할거임
      const [current, hp] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (!visited[j]) {
          if (current === road[j][1] && hp - road[j][2] >= 0) {
            visited[j] = true;
            queue.push([road[j][0], hp - road[j][2]]);
            answer.push(road[j][0]);
          } else if (current === road[j][0] && hp - road[j][2] >= 0) {
            visited[j] = true;
            queue.push([road[j][1], hp - road[j][2]]);
            answer.push(road[j][1]);
          }
        }
      }
    }
  }

  answer = [...new Set(answer)].length;

  return answer;
}
//BFS
