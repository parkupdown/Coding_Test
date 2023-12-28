const s = "banana";

function solution(s) {
  const arr = s.split(``);
  const compareArr = [];
  const answerArr = [];
  arr.forEach((item, index) => {
    const lastIndex = compareArr.lastIndexOf(item);

    if (lastIndex === -1) {
      answerArr.push(lastIndex);
    }
    if (lastIndex !== -1) {
      const closeItem = compareArr.length - lastIndex;
      answerArr.push(closeItem);
    }
    compareArr.push(item);
  });
  return answerArr;
}

solution(s);
