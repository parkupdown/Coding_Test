function solution(user_id, banned_id) {
  let answer = [];
  //banned_id for문
  //user_id for문

  for (let i = 0; i < banned_id.length; i++) {
    const candidation = user_id.filter(
      (user) => user.length === banned_id[i].length
    );
    // 길이가 같은 user_id를 뽑아서 후보로만듦
    const candidationArr = [];
    for (let j = 0; j < candidation.length; j++) {
      for (let k = 0; k < candidation[j].length; k++) {
        if (banned_id[i][k] !== "*" && banned_id[i][k] !== candidation[j][k]) {
          //만약 다른 게 발생한다면?
          break;
        }
        if (k === candidation[j].length - 1) {
          candidationArr.push(candidation[j]);
        }
      }
    }
    answer.push(candidationArr);
  }
  let visited = [];

  answer.forEach((item) => {
    let visitedArr = Array.from({ length: item.length }, () => false);
    visited.push(visitedArr);
  });

  let lastAnswer = [];
  const dfs = (sum, index, stack) => {
    if (index === answer.length) {
      lastAnswer.push(sum);
      return;
    }
    const targetArr = answer[index];

    for (let i = 0; i < targetArr.length; i++) {
      if (visited[index][i] === false && !stack.includes(targetArr[i])) {
        visited[index][i] = true;
        stack.push(targetArr[i]);
        dfs(sum + targetArr[i] + `,`, index + 1, stack);
        stack.pop();
        visited[index][i] = false;
      }
    }
  };

  dfs(``, 0, []);

  lastAnswer = lastAnswer.map((arr) =>
    arr
      .split(`,`)
      .sort((a, b) => (a > b ? 1 : -1))
      .join(``)
  );
  lastAnswer = [...new Set(lastAnswer)];

  return lastAnswer.length;
}
