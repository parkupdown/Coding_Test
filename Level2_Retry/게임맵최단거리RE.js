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
