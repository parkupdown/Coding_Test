const x = 12;

function solution(x) {
  const xx = [...String(x)];
  let sum = 0;
  xx.forEach((item) => (sum = sum + item * 1));
  return x % sum === 0 ? true : false;
}
solution(x);
//해결
