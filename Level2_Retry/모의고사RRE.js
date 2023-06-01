let answers = [1, 2, 3, 4, 5];

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const students = [first, second, third];

  let answer = [];

  const dfs = (arr, sum, index) => {
    if (index === answers.length) {
      answer.push(sum);
      return;
    }
    if (arr[index % arr.length] === answers[index]) {
      sum = sum + 1;
    }
    index = index + 1;

    dfs(arr, sum, index);
  };
  for (let i = 0; i < 3; i++) {
    dfs(students[i], 0, 0);
  }

  const MaxAnswer = Math.max(...answer);

  answer = answer
    .map((item, index) => (item === MaxAnswer ? index + 1 : null))
    .filter((item) => item !== null);

  return answer;
}
solution(answers);
