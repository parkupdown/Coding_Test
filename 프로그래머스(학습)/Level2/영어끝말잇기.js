const n = 5;

const words = [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "e",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
];

function findFailPerson(index, n) {
  const answer = [];
  const person = (index + 1) % n;
  const personOrder = Math.ceil((index + 1) / n);

  if (person === 0) {
    answer.push(n, personOrder);
  }
  if (person !== 0) {
    answer.push(person, personOrder);
  }

  return answer;
}

function findWordLength(wordArr) {
  if (wordArr.length < 2) {
    return false;
  }
}

function findWordDuplicate(word, checkDupArr) {
  if (checkDupArr.includes(word)) {
    return false;
  }
  checkDupArr.push(word);
}

function findWordLine(wordArr, checkLineArr, index) {
  const wordArrLastIndex = wordArr.length - 1;
  const checkLineArrLastIndex = checkLineArr.length - 1;

  if (index !== 0 && checkLineArr[checkLineArrLastIndex] !== wordArr[0]) {
    return false;
  }
  checkLineArr.push(wordArr[wordArrLastIndex]);
}

function solution(n, words) {
  const checkDupArr = [];
  const checkLineArr = [];
  let index = 0;

  for (index; index < words.length; index++) {
    const wordArr = words[index].split(``);
    if (findWordLength(wordArr) === false) {
      console.log("asdd");
      return findFailPerson(index, n);
    }
    if (findWordDuplicate(words[index], checkDupArr) === false) {
      return findFailPerson(index, n);
    }
    if (findWordLine(wordArr, checkLineArr, index) === false) {
      console.log("Ads");
      return findFailPerson(index, n);
    }
    console.log(wordArr);
  }
  return [0, 0];
}
solution(n, words);