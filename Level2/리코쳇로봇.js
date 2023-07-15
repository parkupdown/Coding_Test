function solution(board) {
  // 아니면 plus되는 걸로

  //bfs로

  const bfs = (R) => {
    const queue = [R];

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          nx = nx + dx[i];
          ny = ny + dy[i];
        }
        queue.push([nx, ny]);
      }
    }
  };

  let R;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        R = [i, j];
      }
    }
  }
}

function solution(board) {
  // 아니면 plus되는 걸로

  //bfs로

  const bfs = (R) => {
    const queue = [R];

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= board.length || ny > board[0].length) {
          break;
        }
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          nx = nx + dx[i];
          ny = ny + dy[i];
        }
      }
    }
  };

  let R;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        R = [i, j];
      }
    }
  }
  bfs(R);
}

function solution(board) {
  //이렇게 다 수정된 nx와 ny를 넣어줘야겠지
  // 근데 이미 방문한 걸 또 가면 ???
  // 이미 방문한 list를 또 가면 안돼
  // visited를 만들어야겠군
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const bfs = (fx, fy, count) => {
    const queue = [[fx, fy, count]];
    //x,y좌표가됨
    visited[fx][fy] = true;
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      count = count + 1;
      for (let i = 0; i < 4; i++) {
        let nx = x;
        let ny = y;
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          nx = dx[i] + nx;
          ny = dy[i] + ny;
        }
        if (!visited[nx][ny]) {
          queue.push([nx, ny, count]);
          if (board[nx][ny] === "G") {
            return count;
          }
        }
      }
    }
    return -1;
  };

  let fx;
  let fy;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        fx = i;
        fy = j;
        break;
      }
    }
  }
  return bfs(fx, fy, 0);
}

function solution(board) {
  //이렇게 다 수정된 nx와 ny를 넣어줘야겠지
  // 근데 이미 방문한 걸 또 가면 ???
  // 이미 방문한 list를 또 가면 안돼
  // visited를 만들어야겠군
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const bfs = (fx, fy, count) => {
    const queue = [[fx, fy, count]];
    //x,y좌표가됨
    visited[fx][fy] = true;
    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      count = count + 1;
      for (let i = 0; i < 4; i++) {
        let nx = x;
        let ny = y;
        while (
          nx >= 0 &&
          ny >= 0 &&
          nx < board.length &&
          ny < board[0].length &&
          board[nx][ny] !== "D"
        ) {
          nx = nx + dx[i];
          ny = ny + dy[i];
        }
        //여기서 이제 벽에 부딪힌 nx, ny좌표가 나온다.
        //여기서 방문하지 않았던 nx, ny면 들어간다
        console.log(nx, ny);
      }
    }
    return -1;
  };

  let fx;
  let fy;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        fx = i;
        fy = j;
        break;
      }
    }
  }
  return bfs(fx, fy, 0);
}

function solution(board) {
  //이렇게 다 수정된 nx와 ny를 넣어줘야겠지
  // 근데 이미 방문한 걸 또 가면 ???
  // 이미 방문한 list를 또 가면 안돼
  // visited를 만들어야겠군
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const bfs = (fx, fy, count) => {
    const queue = [[fx, fy, count]];
    //x,y좌표가됨
    visited[fx][fy] = true;
    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      count = count + 1;
      for (let i = 0; i < 4; i++) {
        let nx = x;
        let ny = y;
        while (
          nx + dx[i] >= 0 &&
          ny + dy[i] >= 0 &&
          nx + dx[i] < board.length &&
          ny + dy[i] < board[0].length &&
          board[nx + dx[i]][ny + dy[i]] !== "D"
        ) {
          nx = nx + dx[i];
          ny = ny + dy[i];
          //이렇게 하면 D까지 가버림
          // D까지 가기 전까지 만 해야힘
        }
        //여기서 이제 벽에 부딪힌 nx, ny좌표가 나온다.
        //여기서 방문하지 않았던 nx, ny면 들어간다
        if (board[nx][ny] === "G") {
          return count;
        }
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, count]);
        }
      }
    }
    return -1;
  };

  let fx;
  let fy;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        fx = i;
        fy = j;
        break;
      }
    }
  }
  return bfs(fx, fy, 0);
}

function solution(board) {
  //이렇게 다 수정된 nx와 ny를 넣어줘야겠지
  // 근데 이미 방문한 걸 또 가면 ???
  // 이미 방문한 list를 또 가면 안돼
  // visited를 만들어야겠군
  const visited = [];

  board.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const bfs = (fx, fy, count) => {
    const queue = [[fx, fy, count]];
    //x,y좌표가됨
    visited[fx][fy] = true;
    while (queue.length > 0) {
      let [x, y, count] = queue.shift();
      count = count + 1;
      for (let i = 0; i < 4; i++) {
        let nx = x;
        let ny = y;
        while (
          nx + dx[i] >= 0 &&
          ny + dy[i] >= 0 &&
          nx + dx[i] < board.length &&
          ny + dy[i] < board[0].length &&
          board[nx + dx[i]][ny + dy[i]] !== "D"
        ) {
          nx = nx + dx[i];
          ny = ny + dy[i];
          //이렇게 하면 D까지 가버림
          // D까지 가기 전까지 만 해야힘
        }
        //여기서 이제 벽에 부딪힌 nx, ny좌표가 나온다.
        //여기서 방문하지 않았던 nx, ny면 들어간다
        if (board[nx][ny] === "G") {
          return count;
        }
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny, count]);
        }
      }
    }
    return -1;
  };

  let fx;
  let fy;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        fx = i;
        fy = j;
        break;
      }
    }
  }
  return bfs(fx, fy, 0);
}
//성공 !!
