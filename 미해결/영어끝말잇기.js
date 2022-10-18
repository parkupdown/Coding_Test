const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
function solution(n, words) {
  let A = words.map((item) => item.split("")).map((item) => [...item]);
  let answer = [];
  let answer2 = [];
  let answer3 = [];
  let answers = [];
  let C = new Set(words);
  let D = [...C];

  if (D.length !== words.length) {
    const Filterd = words.filter(
      (item, index) => index !== words.indexOf(item)
    );
    const Index = words.lastIndexOf(Filterd[0]) + 1;
    let NUM = Index % n === 0 ? n : Index % n;
    answer2.push(NUM, Math.ceil(Index / n));
  } //나누어 떨어지면 n 이반환 반복해서 말한거
  for (i = 0; i < A.length - 1; i++) {
    if (A[i].length === 1) {
      let Num3 = (i + 1) / n === 0 ? n : (i + 1) % n;
      let third = Math.ceil((i + 1) / n);
      answer3.push(Num3, third);
      break;
    }

    if (A[i][A[i].length - 1] !== A[i + 1][0]) {
      let Num2 = (i + 1 + 1) % n === 0 ? n : (i + 1 + 1) % n;
      //n+1이 배열 인덱스니까
      //+1을 더해서 차례를 구한다. 그럼 5번째 차례
      //엉뚱한거말한거
      let second = Math.ceil((i + 1 + 1) / n);
      answer.push(Num2, second);
      break;
    }
  }
  if (answer.length + answer2.length === 0) {
    return [0, 0];
  }
  if (answer.length + answer2.length === 4) {
    if (answer[1] > answer2[1]) {
      return answer2;
    }
    if (answer[1] > answer2[1]) {
      return answer;
    }
  }
  if (answer.length + answer2.length === 2) {
    if (answer[1] === undefined) {
      return answer2;
    } else {
      return answer;
    }
  }
}
solution(n, words);
//쭉 가면서 그때 마다 검사를 해야한다!
