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
