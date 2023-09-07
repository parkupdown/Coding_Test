function solution(begin, target, words) {
  //DFS
  //check 통과하면 거기로 이동
  //방문과 탈출을 이용해서 dfs를 구현한다.

  const checkCanChange = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count = count + 1;
      }
    }
    return count === 1 ? true : false;
  };

  const visited = Array.from({ length: words.length }, () => false);

  let answer = 50;

  const dfs = (current, count) => {
    if (current === target && count < answer) {
      answer = count;
    }
    for (let i = 0; i < words.length; i++) {
      if (checkCanChange(current, words[i]) && !visited[i]) {
        visited[i] = true;
        dfs(words[i], count + 1);
        visited[i] = false;
      }
    }
  };
  dfs(begin, 0);

  return answer === 50 ? 0 : answer;
}
