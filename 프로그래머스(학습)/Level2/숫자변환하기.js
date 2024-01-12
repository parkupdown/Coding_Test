function solution(x, y, n) {
  // x를 y로 변환
  // n을 더하거나 2를 곱하거나 3을 곱하거나

  // 우선 순위는 3곱 2곱 n더?

  // 완탐밖에 방법이 없나?

  // 먼저 완탐의 경우
  let answer = [];
  const dfs = (x, count) => {
    if (x >= y) {
      if (x === y) {
        answer.push(count);
      }
      return;
    }
    dfs(x * 3, count + 1);
    dfs(x * 2, count + 1);
    dfs(x + n, count + 1);
    // 더하는게 오래걸릴듯
  };
  dfs(x, 0);

  return answer.length === 0 ? -1 : Math.min(...answer);
}
//50점
function solution(x, y, n) {
  // x를 y로 변환
  // n을 더하거나 2를 곱하거나 3을 곱하거나

  // 우선 순위는 3곱 2곱 n더?

  // 완탐밖에 방법이 없나?

  // 먼저 완탐의 경우

  // 한 번에 3번씩 하게끔해야하는구나 bfs로!
  if (x === y) {
    return 0;
  }
  const arr = [2, 3, n];
  let queue = [[y]];
  let count = 0;
  while (queue.length > 0) {
    count = count + 1;
    const lng = queue.length;
    for (let i = 0; i < lng; i++) {
      let target = queue.shift();
      for (let j = 0; j < 3; j++) {
        let sum;
        if (j === 2) {
          sum = target - arr[j];
        } else if (j !== 2) {
          sum = target / arr[j];
        }
        if (Number.isInteger(sum) && sum >= x) {
          if (sum === x) {
            return count;
          }
          queue.push([sum]);
        }
      }
    }
  }

  return -1;
}
