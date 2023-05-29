let maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

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
