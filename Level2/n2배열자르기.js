const n = 3;
const left = 2;
const right = 5;

function solution(n, left, right) {
  const answerArr = [[]];
  for (let i = 1; i <= n; i++) {
    answerArr[0].push(i);
  }

  while (answerArr.length < n) {
    const lastIndex = answerArr.length - 1;
    const ar = answerArr[lastIndex].map((item) =>
      item < lastIndex + 2 ? lastIndex + 2 : item
    );
    answerArr.push(ar);
  }

  const oneArr = answerArr
    .reduce((acc, cur) => [...acc, ...cur])
    .filter((item, index) => {
      if (index >= left && index <= right) {
        return item;
      }
    });

  return oneArr;
}
solution(n, left, right);
