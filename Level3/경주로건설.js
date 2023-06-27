function solution(board) {
  const answer = [];

  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length }, () => false);
    visited.push(arr);
  });

  const dfs = (RL, UD, road) => {
    if (
      RL < 0 ||
      UD < 0 ||
      RL >= board[0].length ||
      UD >= board.length ||
      board[UD][RL] === 1
    ) {
      return;
    }

    if (RL === board[0].length - 1 && UD === board.length - 1) {
      answer.push(road);
      return;
    }
    // 방문 하는 곳을 기억하긴해야할듯
    if (!visited[UD][RL]) {
      visited = true;
      dfs(RL + 1, UD, road + 1);
      dfs(RL, UD + 1, road + 1);
      dfs(RL - 1, UD, road + 1);
      dfs(RL, UD - 1, road + 1);
      visited = false;
    }
  };

  dfs(0, 0, 0);

  console.log(road);
}

function solution(board) {
  const answer = [];
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dfs = (RL, UD, sum) => {
    if (
      RL < 0 ||
      UD < 0 ||
      RL >= board[0].length ||
      UD >= board.length ||
      board[UD][RL] === 1
    ) {
      return;
    }

    if (RL === board[0].length - 1 && UD === board.length - 1) {
      let corner = 0;
      let target;
      sum.split(``).forEach((item) => {
        if (target === undefined) {
          target = item;
        }
        if (target !== item) {
          corner = corner + 1;
          target = item;
        }
      });

      answer.push(corner * 500 + sum.length * 100);

      return;
    }
    // 방문 하는 곳을 기억하긴해야할듯
    if (!visited[UD][RL]) {
      visited[UD][RL] = true;
      dfs(RL + 1, UD, sum + "R");
      dfs(RL, UD + 1, sum + "U");
      dfs(RL - 1, UD, sum + "R");
      dfs(RL, UD - 1, sum + "U");
      visited[UD][RL] = false;
    }
  };

  dfs(0, 0, ``);

  console.log(answer);
}
//70점

function solution(board) {
  let answer = 10000000;
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dfs = (UD, RL, sum, corner) => {
    if (
      UD < 0 ||
      RL < 0 ||
      UD >= board.length ||
      RL >= board[0].length ||
      board[UD][RL] === 1
    ) {
      //이건 범위 바깥
      return;
    }
    if (
      sum.substr(sum.length - 2) === "RU" ||
      sum.substr(sum.length - 2) === "UR"
    ) {
      corner++;
    }

    const expense = corner * 500 + sum.length * 100;

    if (expense > answer) {
      return;
    }

    if (UD === board.length - 1 && RL === board[0].length - 1) {
      //이건 최종
      answer = expense;
      return;
    }

    if (!visited[UD][RL]) {
      visited[UD][RL] = true;
      dfs(UD, RL + 1, sum + "R", corner);
      dfs(UD + 1, RL, sum + "U", corner);
      dfs(UD, RL - 1, sum + "R", corner);
      dfs(UD - 1, RL, sum + "U", corner);
      visited[UD][RL] = false;
    }
  };
  dfs(0, 0, ``, 0);

  return answer;
}
