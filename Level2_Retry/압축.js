/*
최대한 추가 자료에있는지를 먼저보아야함!
다음에 숫자에 있으면 그거는 또 그 다음까지 보고 없을 때 사전넘버에 추가

*/

const msg = "KAKAO";

function solution(msg) {
  const Alpabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const index = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];
  const answer = [];
  let target = "";

  for (let i = 0; i < msg.length; i++) {
    target = target + msg[i];
    if (Alpabet.includes(target) === false) {
      Alpabet.push(target);
      //사전에 추가
      index.push(index.length + 1);
      //index에 추가
      answer.push(index[Alpabet.indexOf(target.slice(0, -1))]);
      // 더해지기 전의 타겟의 index를 출력
      target = msg[i];
      //타겟은 그 시점부터 다시 시작되고

      //해당 타겟은
    }
  }
  if (Alpabet.includes(target)) {
    answer.push(index[Alpabet.indexOf(target)]);
  }

  return answer;
}
solution(msg);
