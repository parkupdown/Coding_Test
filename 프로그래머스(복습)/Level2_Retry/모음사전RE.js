let word = "AAAE";

function solution(word) {
  const AU = ["A", "E", "I", "O", "U"];
  let answer;
  let count = 0;

  const dfs = (sum) => {
    console.log(sum);
    if (answer !== undefined) {
      return;
    }
    if (sum === word) {
      answer = count;
      return;
    }
    if (sum.length > 5) {
      return;
    }
    count = count + 1;

    dfs(sum + AU[0]);
    dfs(sum + AU[1]);
    dfs(sum + AU[2]);
    dfs(sum + AU[3]);
    dfs(sum + AU[4]);
  };
  dfs(``, 0);

  return answer;
}
solution(word);
