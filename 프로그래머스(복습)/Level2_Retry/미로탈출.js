function solution(maps) {
  // Start => Lever

  // Lever => Exit

  // 방문처리 초기화 필요 매개변수로 시작지점필요 그리고 도착지점 필요
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let step = 0;
  let lever;
  const bfs = (visited, start, end) => {
    const [startX, startY] = start;
    const queue = [[startX, startY]];
    visited[startX][startY] = true;
    // 시작지점에 대한 방문처리를해준다.
    while (queue.length > 0) {
      console.log(queue);
      step = step + 1;
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [x, y] = queue.shift();
        // step을 하나 꺼내서 다음 step을 밟도록한다.
        for (let j = 0; j < 4; j++) {
          const nx = x + dx[j];
          const ny = y + dy[j];
          // 다음 step을 연산하였고 이에 대한 타당성 검증을한다.
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < maps.length &&
            ny < maps[0].length &&
            maps[nx][ny] !== "X" &&
            !visited[nx][ny]
          ) {
            queue.push([nx, ny]);
            visited[nx][ny] = true;
            if (maps[nx][ny] === end) {
              // 도착하고자하는 부분과 같다면
              lever = [nx, ny];
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  let visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const findStart = () => {
    for (let i = 0; i < maps.length; i++) {
      for (let j = 0; j < maps[0].length; j++) {
        if (maps[i][j] === "S") {
          return [i, j];
        }
      }
    }
  };

  const start = findStart();

  if (bfs(visited, start, "L") === false) {
    return -1;
  }
  visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  //L로먼저감
  return bfs(visited, lever, "E") === true ? step : -1;
}
