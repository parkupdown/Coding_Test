const n = 2;
const words = ["ac", "ca", "ac", "ac"];

function findOneWord(n, words, i, answer) {
  if (words[i].length < 2) {
    const target = n - ((i + 1) % n);
    const orderTarget = Math.ceil((i + 1) / n);
    answer.push(target, orderTarget);

    return true;
  }
}

function findOverlap(n, words, i, answer, checkArr) {
  if (checkArr.includes(words[i])) {
    const target = n - ((i + 1) % n);
    const orderTarget = Math.ceil((i + 1) / n);
    answer.push(target, orderTarget);

    return true;
  }
  checkArr.push(words[i]);
}

function findMatch(n, words, i, answer, checkArr) {
  const splitWord = words[i].split("");
  const lastIndex = splitWord.length - 1;

  if (i !== 0 && splitWord[0] !== checkArr[i - 1]) {
    const target = n - ((i + 1) % n);
    const orderTarget = Math.ceil((i + 1) / n);
    answer.push(target, orderTarget);

    return true;
  }

  checkArr.push(splitWord[lastIndex]);
}

function solution(n, words) {
  const answer = [];
  const checkArr = [];

  for (let i = 0; i < words.length; i++) {
    if (findOneWord(n, words, i, answer, checkArr) === true) {
      return answer;
    }
    if (findMatch(n, words, i, answer, checkArr) === true) {
      return answer;
    }
    if (findOverlap(n, words, i, answer, checkArr) === true) {
      return answer;
    }
  }
}
solution(n, words);
/* if (findOneWord(n, words, answer) === true) {
    return answer;
  }
  if (findOverlap(n, words, answer) === true) {
    return answer;
  }
  if (findMatch(n, words, answer) === true) {
    return answer;
  }
  if (answer.length === 0) {
    answer.push(0, 0);
    return answer;
  } */
