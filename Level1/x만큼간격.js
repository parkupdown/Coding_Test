const x = 2;
const n = 5;

function solution(x, n) {
  let answer = [];
  for (i = 0; i < n; i++) {
    answer.push(x + x * i);
  }
  return answer;
}
solution(x, n);
