function solution(n, money) {
  // 기본적으로 각 자리수 마다 모든 money에 있는 배열을 대입해보는게 맞다.
  const visited = Array.from({ length: money.length }, () => false);

  let answer = [];

  const dfs = (sum, test) => {
    if (sum >= n) {
      //이게 핵심인데
      if (sum === n) {
        answer.push(test);
      }
      return;
    }

    for (let i = 0; i < money.length; i++) {
      dfs(sum + money[i], test + String(money[i]));
    }
  };
  dfs(0, ``);

  answer = answer.map((item) =>
    item
      .split(``)
      .sort((a, b) => (a > b ? 1 : -1))
      .join(``)
  );

  answer = [...new Set(answer)].length;

  return answer % 1000000007;
}
//60점

function solution(n, money) {
  let answer = [];
  const dfs = (sum, arr) => {
    if (sum >= n) {
      if (sum === n) {
        const check = arr
          .map((item) => item * 1)
          .sort((a, b) => a - b)
          .join(``);
        if (!answer.includes(check)) {
          answer.push(check);
        }
      }
      return;
    }

    for (let i = 0; i < money.length; i++) {
      //중복만 없애면된다.
      arr.push(money[i]);
      dfs(sum + money[i], arr);
      arr.pop();
    }
  };
  const arr = [];
  dfs(0, arr);

  answer = answer.length;

  return answer % 1000000007;
}
//70점
//효율성테스트통과못함

function solution(n, money) {
  let answer = [];
  // bfs형식으로 최대 자리수는 5개까지니까 자리에 들어올수있는 것들을 각각 구해보는거

  // money => [1,2,5]
  const arr = [];
  const queue = [[0, arr]];
  // sum, saveArr

  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const [sum, Arr] = queue.shift();
      for (let j = 0; j < money.length; j++) {
        if (sum + money[j] === n) {
          let candidation = [...Arr];
          candidation.push(money[j]);
          candidation = candidation
            .map((item) => item * 1)
            .sort((a, b) => a - b)
            .join(``);
          if (!answer.includes(candidation)) {
            answer.push(candidation);
          }
        } else if (sum + money[j] < n) {
          const pushArr = [...Arr];
          pushArr.push(money[j]);
          queue.push([sum + money[j], pushArr]);
        }
      }
    }
  }

  answer = answer.length;
  return answer % 1000000007;
}
