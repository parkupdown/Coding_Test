//1부터 n 사이에 있는 숫자 중 소수의 갯수를 반환
const n = 10;
function solution(n) {
  let answer = 0;
  let check = 0;
  if (n === 2) {
    return 1;
  }
  if (n === 1) {
    return 0;
  } else {
    for (i = 3; i <= n; i++) {
      let count = i;
      for (j = 2; j < count; j++) {
        if (i % j === 0) {
          check = check + 1;
          break;
        }
      }
    }
    return n - 1 - check;
  }
}
solution(n);
