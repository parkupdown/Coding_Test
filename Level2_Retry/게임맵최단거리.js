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
