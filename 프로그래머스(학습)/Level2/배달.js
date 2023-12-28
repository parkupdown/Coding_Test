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
//72점

function solution(N, road, K) {
  let queue = [[1, K]];
  // 1에서 출발하니까 [0]은 현재위치
  // [1]은 hp
  let answer = [1];
  while (queue.length > 0) {
    const visited = Array.from({ length: road.length }, () => false);
    for (let i = 0; i < queue.length; i++) {
      //queue의 해당 뿌리를 모두 탐색할거임
      const [current, hp] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (hp - road[j][2] >= 0 && !visited[j]) {
          if (current === road[j][1]) {
            queue.push([road[j][0], hp - road[j][2]]);
            answer.push(road[j][0]);
            visited[j] = true;
          } else if (current === road[j][0]) {
            queue.push([road[j][1], hp - road[j][2]]);
            answer.push(road[j][1]);
            visited[j] = true;
          }
        }
      }
    }
  }

  answer = [...new Set(answer)].length;

  return answer;
}
//82점으로개선

function solution(N, road, K) {
  // 1에서 출발
  // 양방향통행
  // N개의 마을을 K시간 이하로 배달
  // 몇개 마을 갈 수 있나

  //bfs로 해결해보자
  //visited안했고, for문으로봤을 때 연결되어있으면 거기로 들어감

  const visited = [];
  road.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const queue = [[1, 0, N]];
  // 시작점, 도착점, HP
  // 근데 시작점이 도착점과 같거나 도착점이 시작점과 같으면 연결이 가능함
  // 어디까지 연결이 가능한지를보는거니까
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [start, end, HP] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (!visited[j]) {
          if (
            start === road[j][1] ||
            start === road[j][0] ||
            end === road[j][0] ||
            end === road[j][1]
          ) {
            queue.push([road[0], road[1], HP - road[2]]);
          }
        }
      }
    }
  }
}

function solution(N, road, K) {
  // 1에서 출발
  // 양방향통행
  // N개의 마을을 K시간 이하로 배달
  // 몇개 마을 갈 수 있나

  //bfs로 해결해보자
  //visited안했고, for문으로봤을 때 연결되어있으면 거기로 들어감

  const visited = Array.from({ length: road.length }, () => false);

  const queue = [[1, K]];
  const answer = [1];
  // 시작점, 도착점, HP
  // 근데 시작점이 도착점과 같거나 도착점이 시작점과 같으면 연결이 가능함
  // 어디까지 연결이 가능한지를보는거니까
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [current, HP] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (HP - road[j][2] >= 0 && !visited[j]) {
          if (current === road[j][0]) {
            queue.push([road[j][1], HP - road[j][2]]);
            answer.push(road[j][1]);
          } else if (current === road[j][1]) {
            queue.push([road[j][0], HP - road[j][2]]);
            answer.push(road[j][0]);
          }
        }
      }
    }
  }
  answer = [...new Set(answer)];
  return answer.length;
}

function solution(N, road, K) {
  let queue = [[1, K]];
  // 1에서 출발하니까 [0]은 현재위치
  // [1]은 hp
  let answer = [1];
  while (queue.length > 0) {
    const visited = Array.from({ length: road.length }, () => false);
    for (let i = 0; i < queue.length; i++) {
      //queue의 해당 뿌리를 모두 탐색할거임
      const [current, hp] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (hp - road[j][2] >= 0 && !visited[j]) {
          if (current === road[j][1] || current === road[j][0]) {
            queue.push([road[j][0], hp - road[j][2]]);
            queue.push([road[j][1], hp - road[j][2]]);
            answer.push(road[j][0], road[j][1]);
            visited[j] = true;
          }
        }
      }
    }
  }

  answer = [...new Set(answer)].length;

  return answer;
}

function solution(N, road, K) {
  //1번 마을에서 배달
  //K 시간 이하로 배달이 가능한 마을
  //1 이랑 연결된 곳에서 hp깎고 계속 나아가면?
  // road 는 0,1 index가 연결점이 된다.
  // BFS로 할 수 있을 듯
  const visited = Array.from({ length: road.length }, () => false);
  const stack = [];
  const queue = [[1, 1, K]];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [start, end, hp] = queue.shift();
      for (let j = 0; j < road.length; j++) {
        if (
          !visited[j] &&
          (start === road[j][0] ||
            start === road[j][1] ||
            end === road[j][0] ||
            end === road[j][1])
        ) {
          visited[j] = true;
          queue.push([road[j][0], road[j][1], hp - road[j][2]]);
          stack.push(road[j][0], road[j][1]);
        }
      }
    }
  }
}
