function solution(maps) {
  //BFS로 다시풀어보기
  // start지점은 매번 다르지만
  const visited = [];
  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  let sum = 0;

  const bfs = (i, j) => {
    const queue = [[i, j]];

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    sum = sum + maps[i][j] * 1;

    visited[i][j] = true;

    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
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
            maps[nx][ny] !== "X"
          ) {
            queue.push([nx, ny]);
            sum = sum + maps[nx][ny] * 1;
            visited[nx][ny] = true;
          }
        }
      }
    }
  };
  const answer = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        bfs(i, j);
        visited[i][j] = true;
      }
      if (sum !== 0) {
        answer.push(sum);
      }
      sum = 0;
    }
  }
  answer.sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

function solution(maps) {
  //연결되어있으면 하나의 무인도
  const visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const bfs = ([firstX, firstY]) => {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    const queue = [[firstX, firstY]];
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
            maps[nx][ny] !== "X" &&
            !visited[nx][ny]
          ) {
            queue.push([nx, ny]);
          }
        }
      }
    }
  };
  const answer = [];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      let count = 1;
      bfs([i, j]);
      if (count !== 1) {
        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
