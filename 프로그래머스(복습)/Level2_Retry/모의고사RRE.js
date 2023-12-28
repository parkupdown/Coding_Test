let answers = [1, 2, 3, 4, 5];

function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;
  for (let i = 0; i < length; i++) {
    if (one[i % 5] === answers[i]) result[0]++;
    if (two[i % 8] === answers[i]) result[1]++;
    if (three[i % 10] === answers[i]) result[2]++;
  }
  const answer = [];
  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }
  return answer;
}

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
