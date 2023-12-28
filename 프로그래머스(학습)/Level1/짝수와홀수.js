const num = 3;
function solution(num) {
  let answer = "";
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}
solution(num);
//해결
