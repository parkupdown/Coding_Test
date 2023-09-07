function solution(maps) {
  const visited = [];
  maps.forEach((arr) => {
    const visitedArr = Array.from({ length: arr.length }, () => false);
    visited.push(visitedArr);
  });
  //가능한건 넣고 아닌건 빼고
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const queue = [[0, 0]];
  visited[0][0] = true;
  let count = 0;

  while (queue.length > 0) {
    count = count + 1;

    const queueLength = queue.length;
    //여기서 저장을 해야 queue에 추가되더라고 queue.length에 변화가없다
    for (let i = 0; i < queueLength; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          nx < maps.length &&
          ny >= 0 &&
          ny < maps[0].length &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
          if (nx === maps.length - 1 && ny === maps[0].length - 1) {
            return count + 1;
          }
        }
      }
    }
  }
  return -1;
}
