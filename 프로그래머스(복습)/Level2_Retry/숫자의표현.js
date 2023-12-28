const n = 15;
function solution(n) {
  let count = 0;
  for (let i = 1; i < n / 2; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + j;
      if (sum === n) {
        count = count + 1;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return count + 1;
}
solution(n);
