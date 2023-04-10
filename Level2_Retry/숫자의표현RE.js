let n = 15;
function solution(n) {
  let answer = 1;
  let count = 1;
  let sum = 0;
  if (n < 3) {
    return 1;
  }
  while (count <= Math.floor(n / 2)) {
    for (let i = count; i < 123123123; i++) {
      sum = sum + i;
      if (sum === n) {
        answer = answer + 1;
        sum = 0;
        console.log(i);
        break;
      }
      if (sum > n) {
        sum = 0;
        break;
      }
    }
    sum = 0;
    count = count + 1;
  }
  return answer;
}
solution(n);
