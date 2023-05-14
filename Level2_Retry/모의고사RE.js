let answers = [1, 3, 2, 4, 2];

function solution(answers) {
  let answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const dfs = (student, same, index) => {
    if (index === answers.length) {
      answer.push(same);
      return;
    }
    //종료조건
    const studentLength = student.length;
    if (student[index % studentLength] === answers[index]) {
      same = same + 1;
    }
    index = index + 1;

    dfs(student, same, index);
  };
  dfs(first, 0, 0);
  dfs(second, 0, 0);
  dfs(third, 0, 0);

  //여기서 answer은 문제를 맞춘횟수가주어짐

  const MaxAnswer = Math.max(...answer);

  answer = answer
    .map((item, index) => (item === MaxAnswer ? index + 1 : null))
    .filter((item) => item !== null);

  return answer;
}
solution(answers);
