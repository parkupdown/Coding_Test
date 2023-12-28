function solution(n, roads, sources, destination) {
  // 강철부대가 위치한 지역을 포함한 총 지역의수 n
  // 두 지역을 왕복할 수 있는 길 정보 roads
  // 각 부대원이 위치한 지역을 나타내는 정수배열 source
  // 강철부대의 지역 destination이

  // sources의 원소 순서대로 강철부대로 복귀할 수 있는 최단시간을 담은 배열을 Return

  // destination => 최종적으로 가야하는 길

  // sources는 이제 여기에 있는 부대원들이 어떻게 destination에 보낼건데

  // roads=> map과 같다. 이렇게 갈 수 있다.

  // BFS로 푸는게 빠를 거 같다.
  const answer = [];

  const bfs = (current) => {
    // 현재위치를 각각 받아와야하니까
    const visited = Array.from({ length: roads.length }, () => false);
    const queue = [[current, 0]];
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [currentRoad, step] = queue.shift();
        if (currentRoad === destination) {
          answer.push(step);
          return;
        }
        //최근의 currentRoad를 가져옴
        // 근데 이미 사용한 왕복 route는 고려하지 않는게 맞다.
        for (let j = 0; j < roads.length; j++) {
          if (!visited[j] && roads[j][0] === currentRoad) {
            visited[j] = true;
            queue.push([roads[j][1], step + 1]);
            if (roads[j][1] === destination) {
              answer.push(step + 1);
              return;
            }
          } else if (!visited[j] && roads[j][1] === currentRoad) {
            visited[j] = true;
            queue.push([roads[j][0], step + 1]);
            if (roads[j][0] === destination) {
              answer.push(step + 1);
              return;
            }
          }
        }
      }
    }
    // 도착지에 못간다면
    answer.push(-1);
    return;
  };
  for (let i = 0; i < sources.length; i++) {
    bfs(sources[i]);
  }

  return answer;
}
//BFS로 43점
