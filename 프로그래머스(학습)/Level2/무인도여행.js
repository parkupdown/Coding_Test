let maps = ["X1XXX", "X12XX", "41X3X", "X1X2X"];

function solution(maps) {
  // Index를 둘로 나눠서 UD, RL 을 control하며
  // 재귀를 돌려보자

  if ([...new Set(maps)].length === 1 && maps[0].includes("X")) {
    return [-1];
  }

  let answer = [];
  let visited = [];

  maps.forEach((item) => {
    const visitedArr = Array.from({ length: item.length }, () => false);
    visited.push(visitedArr);
  });

  maps = maps.map((item) => item.split(``));

  let sum = 0;
  const dfs = (UD, RL) => {
    if (
      UD < 0 ||
      UD >= maps.length ||
      RL < 0 ||
      RL >= maps[0].length ||
      maps[UD][RL] === "X"
    ) {
      return;
    }

    if (maps[UD][RL] !== "X" && !visited[UD][RL]) {
      visited[UD][RL] = true;
      sum = sum + maps[UD][RL] * 1;
      dfs(UD + 1, RL);
      dfs(UD - 1, RL);
      dfs(UD, RL + 1);
      dfs(UD, RL - 1);
    }
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      dfs(i, j);
      // 움직인다는 것은 ?? 결국 끊어졌다는 거
      // 이때 최대값을 ?
      if (sum !== 0) {
        answer.push(sum);
      }
      sum = 0;
    }
  }
  answer = answer.sort((a, b) => a - b);

  return answer;
}
solution(maps);
