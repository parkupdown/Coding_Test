const n = 3;
const left = 2;
const right = 5;

/*
function solution(n, left, right) {
  const answers = [];

  for (let i = 0; i < n; i++) {
    const arr = [];
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        arr.push(i + 1);
        continue;
      }
      count = count + 1;
      arr.push(i + 1 + count);
    }
    answers.push(arr);
  }

  let answer = [];

  answers.forEach((item) => (answer = [...answer, ...item]));

  return answer.slice(left, right + 1);
}
solution(n, left, right);
*/
