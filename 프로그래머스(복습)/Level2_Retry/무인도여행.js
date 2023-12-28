let maps = ["X591X", "X1X5X", "X231X", "1XXX1"];

function solution(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (i === 0) {
        if (maps[i + 1][j] !== "X") {
          maps[i + 1][j] = maps[i + 1][j] = maps[i][j];
        }
      }
    }
  }
}

/*
function solution(maps) {
  let answer = 0;
  maps = maps.map((item) => item.split(``));
  const dfs = (i, index, count) => {
    console.log(maps[i][index]);
    if (index > i) {
      return;
    }

    if (maps[i][index] === "X") {
      return;
    }

    if (count === 4) {
      answer = answer + 1;
      return;
    }

    if (maps[i][index] !== "X") {
      dfs(i + 1, index, count + 1);
      dfs(i - 1, index, count + 1);
      dfs(i, index + 1, count + 1);
      dfs(i, index - 1, count + 1);
    }
  };

  for (let i = 1; i < maps.length; i++) {
    dfs(i, 1, 0);
  }
  return answer;
}
solution(maps);
//방문표사해줘야할듯
*/
