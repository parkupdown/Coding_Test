function solution(board) {
  const checkOX = () => {
    let o = 0;
    let x = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === "O") {
          o = o + 1;
        } else if (board[i][j] === "X") {
          x = x + 1;
        }
      }
    }
    return [o, x];
  };

  const checkStop = () => {
    let Oend = 0;
    let Xend = 0;
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
      Oend = Oend + 1;
    }
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
      Xend = Xend + 1;
    }
    // 게임이 잘 종료되었는지 판단
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") {
        Oend = Oend + 1;
      }
      if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") {
        Xend = Xend + 1;
      }
      if (board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O") {
        Oend = Oend + 1;
      }
      if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") {
        Xend = Xend + 1;
      }

      return [Oend, Xend];
    }
  };

  const [o, x] = checkOX();
  const [Oend, Xend] = checkStop();
  if (x > o || o > x + 1) {
    return 0;
  }
  if (Oend > 1 || Xend > 1) {
    return 0;
  }
  if (Oend === 1 && Xend === 1) {
    return 0;
  }
  if (Oend === 1 && o !== x + 1) {
    return 0;
  }
  if (Xend === 1 && x !== o) {
    return 0;
  }
  return 1;
}

function solution(board) {
  const checkOX = () => {
    let o = 0;
    let x = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === "O") {
          o = o + 1;
        } else if (board[i][j] === "X") {
          x = x + 1;
        }
      }
    }
    return [o, x];
  };

  const checkStop = () => {
    let Oend = 0;
    let Xend = 0;
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
      Oend = Oend + 1;
    }
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
      Xend = Xend + 1;
    }
    // 게임이 잘 종료되었는지 판단
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") {
        Oend = Oend + 1;
      }
      if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") {
        Xend = Xend + 1;
      }
      if (board[0][i] === "O" && board[1][i] === "O" && board[2][i] === "O") {
        Oend = Oend + 1;
      }
      if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") {
        Xend = Xend + 1;
      }

      return [Oend, Xend];
    }
  };

  const [o, x] = checkOX();
  const [Oend, Xend] = checkStop();
  if (x > o || o > x + 1) {
    return 0;
  }
  if (Oend >= 1 && Xend >= 1) {
    return 0;
  }
  if (Oend === 1 && o !== x + 1) {
    return 0;
  }
  if (Xend === 1 && x !== o) {
    return 0;
  }
  return 1;
}
//72점
