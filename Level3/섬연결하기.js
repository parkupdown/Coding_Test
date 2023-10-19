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
