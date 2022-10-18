const n = 8;
const a = 4;
const b = 11;

function solution(n, a, b) {
  for (i = 0; i < 123123; i++) {
    if (Math.ceil(a / 2 ** i) === Math.ceil(b / 2 ** i)) {
      break;
    }
  }
  return i;
}
solution(n, a, b);
//성공!
