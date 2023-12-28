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
//80점

function solution(board) {
  // BFS로 해결해야하는데
  //최소 거리부터 구현해보면
  const visited = [];
  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  //방문남기고

  const queue = [[0, 0]];
  visited[0][0] = true;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let answer = 0;

  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [x, y] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        console.log(nx, ny, dx[i]);
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          !visited[nx][ny] &&
          board[nx][ny] === 0
        ) {
          if (nx === board.length - 1 && ny === board[0].length - 1) {
            return answer + 1;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
    answer = answer + 1;
  }
}

function solution(board) {
  // BFS로 해결해야하는데
  //최소 거리부터 구현해보면
  const visited = [];
  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });
  //방문남기고

  const queue = [[0, 0, "시작", "시작", 0, 0]];
  visited[0][0] = true;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let answerArr = [];
  while (queue.length > 0) {
    console.log(queue);
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [x, y, z, k, corner, step] = queue.shift();
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        //여기서 z의 움직임을 알 수 있다.
        //여기서 이전의 z를 저장할 수 있지 않을까
        let nz = z;
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          !visited[nx][ny] &&
          board[nx][ny] === 0
        ) {
          if (nx === board.length - 1 && ny === board[0].length - 1) {
            answerArr.push([step, corner]);
          }
          let queuePush;
          if (j === 0 || j === 2) {
            queuePush = [nx, ny, "세로", z, corner, step + 1];
          } else if (j === 1 || j === 3) {
            queuePush = [nx, ny, "가로", z, corner, step + 1];
          }
          if (queuePush[3] !== "시작" && queuePush[2] !== queuePush[3]) {
            queuePush[4] = queuePush[4] + 1;
          }
          queue.push(queuePush);
          visited[nx][ny] = true;
        }
      }
    }
  }

  return answerArr;
}
