//숫자를 배열로 변환 후 정렬다시
let n = 118372;
function solution(n) {
  let sum = "";
  let y = [...String(n)].map((item) => item * 1).sort((a, b) => b - a);
  //[8,7,3,2,1,1]
  const answer = y.map((item) => (sum = sum + String(item)));
  return sum * 1;
}
solution(n);
