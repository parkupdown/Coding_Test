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
    "N",
    "M",
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
  const answer = [];
  let startIndex = 0;
  let endIndex = 1;

  while (startIndex < msg.length) {
    const target = msg.substr(startIndex, endIndex);
    const targetIndex = Alpabet.indexOf(target);
    if (targetIndex === -1) {
      // 타겟이 없다.
      Alpabet.push(target);
      startIndex = startIndex + endIndex - 1;
      //여기서 잘못됐네
      endIndex = 1;
    }
    if (targetIndex !== -1) {
      if (!answer.includes(targetIndex + 1)) {
        answer.push(targetIndex + 1);
      }
      endIndex = endIndex + 1;
    }
    if (startIndex === msg.length - 1 && targetIndex !== -1) {
      return answer;
    }
  }

  return answer;
}
solution(msg);
