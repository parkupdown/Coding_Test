function solution(board) {
  // 가장 큰 정사각형
  // 가로 세로 중 더 작은 길이가 최대가 될 수 있는 최소 한 변

  // 4x4=> 4가 최대 2x4 => 2가 최대

  // 변의 길이를 받아 정사각형인지를 체크하는 함수가 필요함

  const checkSquare = (line, moveX, moveY) => {
    for (let i = 0; i < line; i++) {
      for (let j = 0; j < line; j++) {
        if (board[i + moveX][j + moveY] !== 1) {
          //1이 아닌게 나오면 그것은 정사각형이 될수 없으니까 return
          return false;
        }
      }
    }
    return true;
  };

  // 근데 위 함수를 이제 전체적으로 옮겨갈 수 있어야함

  // 한칸씩 4x3 이라면 ? 2x2를 체크한다면

  const moveLine = (line) => {
    for (let i = 0; i <= board.length - line; i++) {
      for (let j = 0; j <= board[0].length - line; j++) {
        if (checkSquare(line, i, j) === true) {
          return true;
        }
      }
    }
  };

  // 이제 x,y중 더 작은거 찾기

  const x = board.length;
  const y = board[0].length;

  let line;
  if (x > y) {
    line = y;
  } else if (x <= y) {
    line = x;
  }
  // 짧은게 최대 변의길이가됨

  for (let i = line; i > 0; i--) {
    if (moveLine(i) === true) {
      return i * i;
    }
  }
  return 0;
}
// 정확성 100점 효율성0점
