function solution(A, B) {
  const visited = Array.from({ length: B.length }, () => false);
  let maxCount = 0;

  const dfs = (sum) => {
    if (sum.length === A.length) {
      let count = 0;
      A.forEach((item, index) => {
        if (item < sum[index]) {
          count = count + 1;
        }
      });
      if (count > maxCount) {
        maxCount = count;
      }
      return;
    }

    for (let i = 0; i < B.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        sum.push(B[i]);
        dfs(sum);
        sum.pop();
        visited[i] = false;
      }
    }
  };

  dfs([]);

  return maxCount;
}
//정확도, 효율성이 좋지않다.

function solution(A, B) {
  const indexArr = [];
  let count = 0;
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] < B[j] && !indexArr.includes(j)) {
        indexArr.push(j);

        break;
      }
    }
  }

  return indexArr.length;
}
//효율성통과x
function solution(A, B) {
  let index = 0;
  let count = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  while (true) {
    const ALast = A.length - 1;
    const Blast = B.length - 1;
    if (A.length === 0 || B.length === 0) {
      return count;
    }
    if (A[ALast] < B[Blast]) {
      A.pop();
      B.pop();
      count = count + 1;
    }
    if (A[ALast] >= B[Blast]) {
      B.pop();
    }
  }
}
