const a = 2;
const b = 1;
const n = 20;

function solution(a, b, n) {
  let totalTarget = n;
  let answer = 0;

  while (totalTarget >= a) {
    answer = answer + Math.floor(totalTarget / a) * b;
    totalTarget = Math.floor(totalTarget / a) * b + (totalTarget % a);
  }
  return answer;
}
solution(a, b, n);
//a= 몇개를 가지고 왔나
//b= 몇개를 줄게

// 몫을 계산한 후 그 몫 * b + 나머지 값

// 계속 나누다가 그 값이 <a보다 작을 때 멈추기
