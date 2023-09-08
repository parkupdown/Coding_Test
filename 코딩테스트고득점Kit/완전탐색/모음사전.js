function solution(word) {
  const alpabet = ["A", "E", "I", "O", "U"];
  let answer;
  let count = 0;
  const dfs = (sum) => {
    if (sum === word) {
      answer = count;
      return;
    }
    if (sum.length === 5) {
      return;
    }
    for (let i = 0; i < alpabet.length; i++) {
      count = count + 1;
      dfs(sum + alpabet[i]);
    }
  };
  dfs(``);
  return answer;
}
