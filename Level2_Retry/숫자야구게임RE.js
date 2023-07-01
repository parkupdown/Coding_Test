function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);
  let AIndex = 0;
  let BIndex = 0;
  let answer = 0;

  while (AIndex < A.length) {
    if (A[AIndex] < B[BIndex]) {
      //A보다 B가 더크면?
      answer++;
      AIndex++;
      BIndex++;
    } else if (A[AIndex] >= B[BIndex]) {
      //A가 B보다 크면? A를줄여야함
      AIndex++;
    }
  }

  return answer;
}
