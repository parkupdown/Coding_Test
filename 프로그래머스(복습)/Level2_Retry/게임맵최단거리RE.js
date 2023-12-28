let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  let answer = [];
  const visited = [];
  for (let i = 0; i < maps.length; i++) {
    const Ivisited = Array.from({ length: maps[0].length }, () => false);
    visited.push(Ivisited);
  }
  //visited 생성

  const dfs = (down, side, count) => {
    if (down < 0 || down >= maps.length || side < 0 || side >= maps[0].length) {
      return;
    }
    if (down === maps.length - 1 && side === maps[0].length - 1) {
      answer.push(count);
      return;
    }
    if (maps[down][side] === 1) {
      // undefined인 경우가 문제
      if (!visited[down][side]) {
        visited[down][side] = true;
        dfs(down - 1, side, count + 1);
        dfs(down + 1, side, count + 1);
        dfs(down, side + 1, count + 1);
        dfs(down, side - 1, count + 1);
        visited[down][side] = false;
      }
    }
  };
  dfs(0, 0, 1);
  if (answer.length === 0) {
    return -1;
  }

  answer = Math.min(...answer);

  return answer;
}
solution(maps);
/*
function solution(maps) {
  const answer = [];
  const dfs = (x, y, step) => {
    if (x === 4 && y === 4) {
      answer.push(step);
      return;
    }
    if (maps[x + 1][y] === 0 && maps[x][y + 1] === 0) {
      return;
    }
    if (maps[x][y - 1] === 1) {
      dfs(x, y - 1, step + 1);
    }
    if (maps[x + 1][y] === 1) {
      dfs(x + 1, y, step + 1);
    }
    if (maps[x][y + 1] === 1) {
      dfs(x, y + 1, step + 1);
    }
  };
  dfs(0, 0, 0);
}
  */
function solution(maps) {
  //bfs
  const queue = [[0, 0]];
  //여기서부터 탐색을 할거임 queue에 넣으면서
  let visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  visited[0][0] = true;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 1;
  while (queue.length !== 0) {
    console.log(queue);
    //queue가 0 이 될때 까지 즉, 모든 경우를 탐색할거임

    for (let i = 0; i < queue.length; i++) {
      let [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps[0].length &&
          ny < maps.length &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          if (nx === maps[0].length - 1 && ny === maps.length - 1) {
            return answer++;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
    answer++;
  }
  return -1;
}
function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  function solution(maps) {
    //bfs
    const queue = [[0, 0]];
    //여기서부터 탐색을 할거임 queue에 넣으면서
    let visited = [];

    maps.forEach((item) => {
      const arr = Array.from({ length: item.length }, () => false);
      visited.push(arr);
    });
    visited[0][0] = true;

    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let answer = 1;
    while (queue.length !== 0) {
      const queueLd = queue.length;
      //queue가 0 이 될때 까지 즉, 모든 경우를 탐색할거임
      for (let i = 0; i < queueLd; i++) {
        let [x, y] = queue.shift();
        for (let j = 0; j < 4; j++) {
          let nx = x + dx[j];
          let ny = y + dy[j];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < maps.length &&
            ny < maps[0].length &&
            maps[nx][ny] === 1 &&
            !visited[nx][ny]
          ) {
            if (nx === maps.length - 1 && ny === maps[0].length - 1) {
              return answer + 1;
            }
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
      answer++;
    }
    return -1;
  } // 성공!!

  return -1;
}

function solution(maps) {
  // BFS =>?
  // 너비우선탐색 =>? 이거는 결국 한 뿌리에서 다음 뿌리를 천천히 살펴보는거 즉, 뿌리별로 보는거
  let answer = 1;
  // 처음에 시작점이 들어가는거니까
  const bfs = () => {
    const visited = [];

    maps.forEach((item) => {
      const arr = Array.from({ length: item.length }, () => false);
      visited.push(arr);
    });

    const queue = [[0, 0]];
    //초기값 => 시작점
    const dx = [0, 1, 0, 1];
    const dy = [1, 0, -1, 0];

    while (queue.length > 0) {
      //맨앞에있는걸빼면서 저장
      //얘를기준으로 탐색해볼거야

      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [x, y] = queue.shift();
        //queue에 담긴 그러니까 해당 뿌리를 먼저 검사하게 되는거지
        for (let j = 0; j < 4; j++) {
          let nx = x + dx[j];
          let ny = y + dy[j];
          //이렇게 더한 값이 그 범위에있냐 이말이야
          // 있으면? queue에 넣는거지 target이 되는거야
          // 없으면? 무시되는거야
          //queue에 추가될때 지금의 queue를 기준으로 넘겨야하잖아
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < maps.length &&
            ny < maps[0].length &&
            !visited[nx][ny] &&
            maps[nx][ny] === 1
          ) {
            if (nx === maps.length - 1 && ny === maps[0].length - 1) {
              return answer + 1;
            }
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
      //while문이 한번둘어왔다는건?
      // 뿌리를 한번 들어왔다는거
      answer++;
    }

    return -1;
  };
  bfs();
}

function solution(maps) {
  //자 먼저 시작 지점에서부터 탐색을 해야겠지?
  const visited = [];
  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const queue = [[0, 0]];
  //시작지점은 ? 0,0
  visited[0][0] = true;
  //시작지점은 이미 방문한격이다!

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  //이게 뭘까?
  // 위 배열을 모두 더하면 십자가 모양으로 모두 탐색할 수 있게됨
  let answer = 1;
  //1인 이유는 이미 [0,0]을 밟고있기때문
  while (queue.length > 0) {
    console.log(queue);
    //종료조건이 다음과 같은이유는 ? queue를 앞에서부터제거하면서
    //조건에 해당하는 index만 push할거기때문
    const queueLength = queue.length;
    // 여기서 length가 변경되니까 queueLength를 변경해주어야함
    for (let i = 0; i < queueLength; i++) {
      //범위를 다음과 같이 설정해준 이유는?
      // 해당 뿌리를 모두 검사할 것이기 떄문
      const [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          !visited[nx][ny] &&
          maps[nx][ny] === 1
        ) {
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            //만약 nx와 ny가 원하는 종료 지점에 도달하면?? 최종적으로 return이됨
            return answer + 1;
          }
          queue.push([nx, ny]);
          //위 조건을 모두 통과하면 queue에 들어간다 즉, 다음 탐색 뿌리가됨
          visited[nx][ny] = true;
          //bfs는 방문한곳을 다신 방문하지 않음
        }
      }
    }
    answer++;
  }
  return -1;
  //여기서 return 된다는 건 ?? while의 탈출조건인 원하는 Exit에 도달하지 못했다는 거
}

function solution(maps) {
  const visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  let count = 1;

  // 4방향 모두 탐색해야하니까
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const queue = [[0, 0]];

  visited[0][0] = true;

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            return count + 1;
          }
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
    count++;
  }
  return -1;
}

function solution(maps) {
  const visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  // 4방향 모두 탐색해야하니까
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const queue = [[0, 0, 1]];

  visited[0][0] = true;

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [x, y, count] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < maps.length &&
          ny < maps[0].length &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            return count + 1;
          }
          visited[nx][ny] = true;
          queue.push([nx, ny, count + 1]);
        }
      }
    }
  }
  return -1;
}
