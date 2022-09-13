const s = "a B z"; //공백없애야함
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
solution(s, n);
