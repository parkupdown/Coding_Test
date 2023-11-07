function solution(n, k, enemy) {
  // 이분탐색으로 해볼까
  let right = enemy.length;
  let left = 0;

  while (left <= right) {
    const mid = Math.ceil((right + left) / 2);

    // mid => [4,2,4,5,3,3,1]
    // 중앙부터 잘라들어감
    const sliced = enemy
      .slice(0, mid)
      .sort((a, b) => b - a)
      .slice(k);
    // sliced => [4,2,4,5]
    const sum = sliced.reduce((acc, cur) => acc + cur, 0);

    if (sum < n) {
      left = mid + 1;
    } else if (sum >= n) {
      right = mid - 1;
    }
  }
  return left - 1;
}
// 이분탐색으로 84점
function solution(n, k, enemy) {
  // 이분탐색으로 해볼까

  let right = enemy.length;
  let left = 0;

  while (left <= right) {
    const mid = Math.ceil((right + left) / 2);
    // mid => [4,2,4,5,3,3,1]
    // 중앙부터 잘라들어감
    const sliced = enemy
      .slice(0, mid)
      .sort((a, b) => b - a)
      .slice(k);
    // sliced => [4,2,4,5]
    const sum = sliced.reduce((acc, cur) => acc + cur, 0);

    if (sum <= n) {
      left = mid + 1;
    } else if (sum > n) {
      right = mid - 1;
    }
  }
  return left - 1;
}
// 100점 통과
// 병력을 다써도 clear로 고려한다.
