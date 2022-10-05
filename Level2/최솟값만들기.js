const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  let answer = 0;
  const C = A.sort((a, b) => a - b);
  const D = B.sort((a, b) => b - a);
  for (i = 0; i < A.length; i++) {
    answer = answer + C[i] * D[i];
  }
  return answer;
}

solution(A, B);
//해결
