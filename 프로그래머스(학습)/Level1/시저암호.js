const s = "a B z";
const n = 4;
function solution(s, n) {
  const B = [
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
  const S = B.map((item) => item.toLowerCase());
  const arrays = [...s];
  let answers = [];
  arrays.forEach(function (item) {
    if (item === " ") {
      answers.push(" ");
    } else {
      item === item.toUpperCase()
        ? answers.push(B[B.indexOf(item) + n])
        : answers.push(S[S.indexOf(item) + n]);
    }
  });
  let sum = "";
  answers.forEach((item) => (sum = sum + item));
  return sum;
}
solution(s, n);

//해결

/*const s = "a B z"; //공백없애야함
const n = 4;
function solution(s, n) {
  const Big = [
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
  ];
  const Small = Big.map((item) => item.toLowerCase());
  let answers = [];
  const answerarr = [...s];
  answerarr.forEach(function (item) {
    if (item === " ") {
      answers.push("");
    } else {
      item.toUpperCase() === item
        ? answers.push(Big[Big.indexOf(item) + n])
        : answers.push(Small[Small.indexOf(item) + n]);
    }
  });
  return String(answers.join(""));
}
solution(s, n);*/
