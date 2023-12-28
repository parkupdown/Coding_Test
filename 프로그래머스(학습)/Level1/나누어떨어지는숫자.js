const arr = [5, 9, 7, 10];
const divisor = 5;
function solution(arr, divisor) {
  let answers = [];
  arr.forEach((item) => {
    item % divisor === 0 ? answers.push(item) : null;
  });
  return answers.length !== 0 ? answers.sort((a, b) => a - b) : [-1];
}
solution(arr, divisor);
