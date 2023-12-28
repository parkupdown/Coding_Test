//Kim의 위치를 찾아 "김서방은 x에 있다" 반환
const seoul = ["Jane", "Kim"];
function solution(seoul) {
  const answers = seoul.indexOf("Kim");
  let answer = `김서방은 ${answers}에 있다`;
  return answer;
}
