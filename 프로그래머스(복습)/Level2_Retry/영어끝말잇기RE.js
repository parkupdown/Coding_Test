let n = 4;
let words = [
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
  const stack = [words[0]];
  let target = words[0].split(``)[words[0].length - 1];
  console.log(target);
  let answerI;
  const A = (item) => {
    if (item.length === 1) {
      return false;
    }
  };
  const B = (item, stack) => {
    if (stack.includes(item)) {
      return false;
    }
  };
  const C = (item, target) => {
    const FirstItem = item.split(``)[0];
    console.log(FirstItem);
    if (target !== FirstItem) {
      return false;
    }
  };

  for (let i = 1; i < words.length; i++) {
    if (
      A(words[i]) === false ||
      B(words[i], stack) === false ||
      C(words[i], target) === false
    ) {
      answerI = i;
      break;
    }
    target = words[i][words[i].length - 1];
    stack.push(words[i]);
    if (i === words.length - 1) {
      return [0, 0];
    }
  }

  const First = Math.floor((answerI + 1) % n);
  const Second = Math.ceil((answerI + 1) / n);

  return First === 0 ? [n, Second] : [First, Second];
}
solution(n, words);
