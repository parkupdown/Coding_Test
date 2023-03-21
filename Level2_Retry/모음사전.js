const word = "AAAE";

function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  let count = 1;
  const answer = [];
  function dfs(AU, word) {
    if (AU === word) {
      answer.push(count);
    }
    if (AU.length > 5) {
      return;
    }
    console.log(AU);
    console.log(word);
    if (answer.length < 1) {
      count = count + 1;
    }
    dfs(AU + arr[0], word);
    dfs(AU + arr[1], word);
    dfs(AU + arr[2], word);
    dfs(AU + arr[3], word);
    dfs(AU + arr[4], word);
  }
  for (let i = 0; i < arr.length; i++) {
    const firstWord = arr[i];
    dfs(firstWord, word);
  }

  return answer[0];
}
solution(word);
