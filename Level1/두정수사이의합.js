/*const a = 3;
const b = 5;
function solution(a, b) {
  let arr = [a, b];
  arr.sort();
  if (a - b === 0) {
    return a;
  }
  let sum = a + b;
  for (i = 1; i < arr[1] - arr[0]; i++) {
    sum = sum + arr[0] + 1 * i;
  }
  return sum;
}
solution(a, b); 이렇게하면 - 인경우는 오류가남*/
const a = -1;
const b = -3;

function solution(a, b) {
  if (a === b) {
    return a;
  }
  let arr = [a, b].sort((a, b) => a - b);
  let count = arr[0];
  let sum = 0;
  while (count + 1 < arr[1]) {
    count = count + 1;
    sum = sum + count;
  }
  return sum + a + b;
}
solution(a, b);
