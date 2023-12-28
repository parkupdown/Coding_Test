let brown = 10;
let yellow = 2;

function solution(brown, yellow) {
  const plus = (brown - 4) / 2;
  let x = 0;
  let y = 0;
  for (let i = 1; i <= plus; i++) {
    y = plus - i;
    if (i * y === yellow) {
      x = i;
      break;
    }
  }
  return [x + 2, y + 2].sort((a, b) => b - a);
}
solution(brown, yellow);
