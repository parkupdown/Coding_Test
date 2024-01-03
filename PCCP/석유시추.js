function solution(land) {
  const x = [1, 0, -1, 0];
  const y = [0, 1, 0, -1];

  const bfs = (i, j, visited) => {
    const queue = [[j, i]];
    let sum = 1;
    visited[j][i] = true;

    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        let [dy, dx] = queue.shift();
        for (let j = 0; j < 4; j++) {
          const nx = dx + x[j];
          const ny = dy + y[j];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < land[0].length &&
            ny < land.length &&
            !visited[ny][nx] &&
            land[ny][nx] === 1
          ) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            sum = sum + 1;
          }
        }
      }
    }
    return sum;
  };

  let answer = 0;
  for (let i = 0; i < land[0].length; i++) {
    let sum = 0;
    const visited = [];
    land.forEach((item) => {
      const arr = Array.from({ length: item.length }, () => false);
      visited.push(arr);
    });
    for (let j = 0; j < land.length; j++) {
      //i가 [j][i]의 형태로 들어가야함
      if (land[j][i] === 1 && !visited[j][i]) {
        sum = sum + bfs(i, j, visited);
      }
    }
    if (answer < sum) {
      answer = sum;
    }
  }
  return answer;
}
