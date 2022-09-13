//제곱근을 판별한다.
//제곱근이 있으면 제곱근+1의 제곱을 리턴 없으면 -1 을 리턴
//Math.sqrt()이용
//Number.isinteger()이용

const n = 121;

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
solution(n);
