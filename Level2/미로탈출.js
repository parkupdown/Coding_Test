let maps = ["XXXXXL", "XXXXOO", "OOSXOX", "OXXXOX", "EOOOOX"];

function solution(maps) {
  const answers = [];
  let visited = [];
  let answer = 100000000;
  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dfs = (UD, RL, count, target) => {
    if (
      UD < 0 ||
      RL < 0 ||
      UD >= maps.length ||
      RL >= 5 ||
      maps[UD][RL] === "X"
    ) {
      return;
    }
    if (answer < count) {
      return;
    }
    if (maps[UD][RL] === target) {
      //레버찾기성공
      answer = count;
      return;
    }
    if (!visited[UD][RL]) {
      visited[UD][RL] = true;
      dfs(UD, RL + 1, count + 1, target);
      dfs(UD + 1, RL, count + 1, target);
      dfs(UD, RL - 1, count + 1, target);
      dfs(UD - 1, RL, count + 1, target);
      visited[UD][RL] = false;
    }
  };

  let sIndex = [];
  let leverIndex = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (maps[i][j] === "S") {
        sIndex = [i, j];
      }
      if (maps[i][j] === "L") {
        leverIndex = [i, j];
      }
    }
  }

  dfs(sIndex[0], sIndex[1], 0, "L");

  if (answer === 100000000) {
    return -1;
    //레버까지갈수없다.
  }
  console.log(answer);
  answers.push(answer);
  answer = 100000000;
  visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  //visited 리셋 (방문기록리셋)
  //이제 여기서 또 찾아 가야지 end로
  dfs(leverIndex[0], leverIndex[1], 0, "E");
  if (answer === 100000000) {
    return -1;
    //출구까지갈수없다.
  }
  answers.push(answer);
  console.log(answer);
  return answers[0] * 1 + answers[1] * 1;
}
solution(maps);
//21점 시간초과가 대부분
//BFS로풀어야할듯

function solution(maps) {
  const answers = [];
  let visited = [];
  let answer = 100000000;
  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dfs = (UD, RL, count, target) => {
    if (
      UD < 0 ||
      RL < 0 ||
      UD >= maps.length ||
      RL >= maps[0].length ||
      maps[UD][RL] === "X"
    ) {
      return;
    }
    if (answer < count) {
      return;
    }
    if (maps[UD][RL] === target) {
      //레버찾기성공
      answer = count;
      return;
    }
    if (!visited[UD][RL]) {
      visited[UD][RL] = true;
      dfs(UD, RL + 1, count + 1, target);
      dfs(UD + 1, RL, count + 1, target);
      dfs(UD, RL - 1, count + 1, target);
      dfs(UD - 1, RL, count + 1, target);
      visited[UD][RL] = false;
    }
  };

  let sIndex = [];
  let leverIndex = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        sIndex = [i, j];
      }
      if (maps[i][j] === "L") {
        leverIndex = [i, j];
      }
    }
  }

  dfs(sIndex[0], sIndex[1], 0, "L");

  if (answer === 100000000) {
    return -1;
    //레버까지갈수없다.
  }

  answers.push(answer);
  answer = 100000000;
  visited = [];

  maps.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  //visited 리셋 (방문기록리셋)
  //이제 여기서 또 찾아 가야지 end로
  dfs(leverIndex[0], leverIndex[1], 0, "E");
  if (answer === 100000000) {
    return -1;
    //출구까지갈수없다.
  }
  answers.push(answer);

  return answers[0] * 1 + answers[1] * 1;
}
// 5가최대가 아닌 maps[0].length를 기준으로해주어야함 문제잘읽기
// 47.8

function solution(maps) {
  // 먼저 Laver한테 가고
  // Laver에서 EXIT으로 가고
  // bfs를 함수형태로 만들어서 2번사용해야한다.
  const answer = [];
  const bfs = (first, target) => {
    let visited = [];
    maps.forEach((item) => {
      const arr = Array.from({ length: item.length }, () => false);
      visited.push(arr);
    });

    visited[first[0]][first[1]] = true;

    let count = 0;

    const queue = [];
    queue.push(first);

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

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
            if (maps[nx][ny] === target) {
              return count + 1;
            }
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
      //while문 끝
      answer++;
    }
    return -1;
  };

  //start랑 exit찾기
  let startIndex;
  let exitIndex;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        startIndex = [i, j];
      }
      if (maps[i][j] === "E") {
        exitIndex = [i, j];
      }
    }
  }
  const startToLaver = bfs(startIndex, "L");

  console.log(startToLaver);
}

function solution(maps) {
  // 먼저 Laver한테 가고
  // Laver에서 EXIT으로 가고
  // bfs를 함수형태로 만들어서 2번사용해야한다.
  const bfs = (first, target) => {
    let visited = [];
    maps.forEach((item) => {
      const arr = Array.from({ length: item.length }, () => false);
      visited.push(arr);
    });

    visited[first[0]][first[1]] = true;

    let count = 0;

    const queue = [];
    queue.push(first);

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

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
            if (maps[nx][ny] === target) {
              return count + 1;
            }
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
      //while문 끝
      count++;
    }
    return -1;
  };

  //start랑 exit찾기
  let startIndex;
  let laverIndex;
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        startIndex = [i, j];
      }
      if (maps[i][j] === "L") {
        laverIndex = [i, j];
      }
    }
  }
  const startToLaver = bfs(startIndex, "L");
  if (startToLaver === -1) {
    return -1;
  }
  const laverToExit = bfs(laverIndex, "E");
  if (laverToExit === -1) {
    return -1;
  }
  return startToLaver + laverToExit;
}
