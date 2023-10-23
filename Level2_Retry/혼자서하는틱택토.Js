function solution(board) {
  // 선공표시는 O
  // 후공표시는 X

  // 일단 O X가 각각 3개이상씩이면 문제

  // X가 더 많아도 문제

  // O 와 X의 차이가 1보다 커도 문제
  board = board.map((item) => item.split(`,`)).join(``);

  let Ocount = 0;
  let Xcount = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === "O") {
      Ocount = Ocount + 1;
    } else if (board[i] === "X") {
      Xcount = Xcount + 1;
    }
  }

  if (Ocount >= 3 && Ocount === Xcount) {
    return 0;
    // 일단 O X가 각각 3개이상씩이면 문제
  }
  if (Ocount - Xcount > 1) {
    return 0;
    // O 와 X의 차이가 1보다 커도 문제
  }
  if (Xcount > Ocount) {
    return 0;
    // X가 O보다 많으면 실패
  }
  if (Xcount === 3 && Ocount > 3) {
    return 0;
    // X가 이미 이겻는데 O를 계속 둔 경우
  }

  return 1;
}
