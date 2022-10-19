const n = 5000;

function solution(n) {
  let N = n;
  let count = 0;
  while (N >= 2) {
    if (N % 2 === 1) {
      count++;
      N = N - 1;
    }
    N = N / 2;
  }
  return count + 1;
}
solution(n);
//해결 나머지로 풀어도좋다!
