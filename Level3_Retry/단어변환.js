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
