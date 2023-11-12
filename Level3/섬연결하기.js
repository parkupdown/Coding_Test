function solution(n, costs) {
  // 다리는 여러개를 거쳐서 건너도 건너지는것으로 판단한다.

  // 모두 건널 수 있는 최소비용

  // costs의 길이 => ((n-1)*n)/2 이하

  // dfs ? bfs ?

  // 연결되면 모두 visited는 둘 다 true

  // dfs로 풀자

  // costs 순회하면서 하나씩 연결해버리고 만약 visited false가 없으면 return하고
  // 다음꺼

  const visited = Array.from({ length: costs.length }, () => false);
  const visitedIsland = Array.from({ length: n }, () => false);
  let answer = 9999999;

  const dfs = (sum) => {
    if (visitedIsland.includes(false) === false) {
      if (answer > sum) {
        answer = sum;
      }
      return;
    }

    for (let i = 0; i < costs.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        // 아직 방문하지 않은 index라면 들어가
        const firstIsland = costs[i][0];
        const secondIsland = costs[i][1];
        // 처음섬과 두번쨰섬

        visitedIsland[firstIsland] = true;
        visitedIsland[secondIsland] = true;
        // 해당 연결된 섬 이제 true
        dfs(sum + costs[i][2]);
        // 해당 index true 처리해주고 연결된 섬 방문처리해주고
        // 다시 다음 으로
        visited[i] = false;
        visitedIsland[firstIsland] = false;
        visitedIsland[secondIsland] = false;
        // 해당 연결에서 빠져나옴
      }
    }
  };
  dfs(0);

  return answer;
}

// 테스트 케이스만 통과

function solution(n, costs) {
  //n-1개의 라면 해당 n보다 1적은 만큼 연결했을 때 모두 false면 그때의 sum을 return

  const landVisited = Array.from({ length: n }, () => false);
  const visited = Array.from({ length: costs.length }, () => false);
  const answer = [];
  const dfs = (sum, count) => {
    // 먼저 costs에서 한칸씩 더해가야함
    if (count === n - 1) {
      //이때 return이 됨
      if (landVisited.includes(false) === false) {
        //만약 이때 모든 섬이 연결되어있다면
        answer.push(sum);
      }
      return;
    }
    for (let i = 0; i < costs.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        landVisited[costs[i][0]] = true;
        landVisited[costs[i][1]] = true;
        dfs(sum + costs[i][2], count + 1);
        //탈출하면 방문기록 초기화
        visited[i] = false;
        landVisited[costs[i][0]] = false;
        landVisited[costs[i][1]] = false;
      }
    }
  };

  dfs(0, 0);

  return Math.min(...answer);
}
// 25점

function solution(n, costs) {
  //n-1개의 라면 해당 n보다 1적은 만큼 연결했을 때 모두 false면 그때의 sum을 return

  let landVisited = Array.from({ length: n }, () => 0);
  const visited = Array.from({ length: costs.length }, () => false);
  const answer = [];
  const dfs = (sum, count) => {
    // 먼저 costs에서 한칸씩 더해가야함
    if (count === n - 1) {
      //이때 return이 됨
      if (landVisited.includes(0) === false) {
        //만약 이때 모든 섬이 연결되어있다면
        answer.push(sum);
      }
      return;
    }
    for (let i = 0; i < costs.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        landVisited[costs[i][0]] = landVisited[costs[i][0]] + 1;
        landVisited[costs[i][1]] = landVisited[costs[i][1]] + 1;
        dfs(sum + costs[i][2], count + 1);
        //탈출하면 방문기록 초기화
        visited[i] = false;
        //여기서 잘못됐네 무조건 해당 그게 false가 되는게 아님. 이전에서 연결됐다면 연결된것
        landVisited[costs[i][0]] = landVisited[costs[i][0]] - 1;
        landVisited[costs[i][1]] = landVisited[costs[i][1]] - 1;
      }
    }
  };

  dfs(0, 0);

  return Math.min(...answer);
}
//35점
