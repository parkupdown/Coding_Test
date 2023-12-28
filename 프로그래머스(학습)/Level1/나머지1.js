//n을 x로 나눴을 때 나머지가 1이되는x의 값중 가장 작은값을 리턴

const n = 10;
function solution(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
solution(n);

//해결
