let word = "AAAE";

function solution(word) {
  let count = 0;
  let answer;
  const alpabet = [`A`, `E`, `I`, `O`, `U`];
  const dfs = (sum) => {
    if (sum.length > 5) {
      return;
    }
    if (sum === word) {
      answer = count;
      return;
    }
    count = count + 1;
    for (let i = 0; i < 5; i++) {
      dfs(sum + alpabet[i], count);
    }
  };
  dfs(``);

  return answer;
}
solution(word);
