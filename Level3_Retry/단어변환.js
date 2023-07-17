function solution(begin, target, words) {
  const answer = [];
  const visited = Array.from({ length: words.length }, () => false);
  const findCanChange = (a, b) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }
    return count === 1 ? true : false;
  };

  const dfs = (begin, count) => {
    if (begin === target) {
      answer.push(count);
      return;
    }
    // words를 순회하면서 방문안하고 또 한개차이나는건 들어가
    // 한개차이나는것만 찾으면됨
    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && findCanChange(begin, words[i])) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  };
  dfs(begin, 0);
  answer.sort((a, b) => a - b);

  return answer.length === 0 ? 0 : answer[0];
}

function solution(begin, target, words) {
  //DFS풀이법
  const check = (current, word) => {
    let count = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== word[i]) {
        count = count + 1;
      }
    }
    return count === 1 ? true : false;
  };

  const visited = Array.from({ length: words.length }, () => false);

  let answer = 50;
  const dfs = (current, count) => {
    if (current === target) {
      if (count < answer) {
        answer = count;
      }
      return;
    }
    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && check(current, words[i])) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  };
  dfs(begin, 0);

  return answer === 50 ? 0 : answer;
}
// dfs로 다시풀어보기

function solution(begin, target, words) {
  //BFS풀이법
  const check = (current, word) => {
    let count = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== word[i]) {
        count = count + 1;
      }
    }
    return count === 1 ? true : false;
  };

  const queue = [[begin]];
  const visited = [];

  let answer = 0;
  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const [current] = queue.shift();
      if (current === target) {
        return answer;
      }
      //이 단계에서 마다 방문처리가 되어져야함
      for (let j = 0; j < words.length; j++) {
        if (!visited.includes(j) && check(current, words[j])) {
          visited.push(j);
          queue.push([words[j]]);
        }
      }
    }
    answer = answer + 1;
  }
  return 0;
}
//bfs로해결
