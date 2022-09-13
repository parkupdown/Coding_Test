const N = 987;
function solution(n) {
  const Y = [...String(n)];
  let answer = 0;
  Y.map((item) => (answer = parseInt(item) + answer));
  return answer;
}
solution(n);
//해결

//split를 이용할 수 도 있다. .split(' ')이렇게하면 띄어쓰기를 기준으로 인덱싱
//.split('')이렇게하면 알파벳하나를 기준으로 인덱싱
//.split()이렇게하면 전체 문장이 인덱싱
