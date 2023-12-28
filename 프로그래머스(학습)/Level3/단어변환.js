const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

function solution(begin, target, words) {
  const visited = Array.from({ length: words.length }, () => false);
  let answer = [];
  if (!words.includes(target)) {
    return 0;
  }

  const dfs = (current, count) => {
    if (current === target) {
      answer.push(count);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (visited[i] === false) {
        let diffCount = 0;
        // 몇개가 있는지 세야함
        // 1개만 다른 word가 currentTarget이 될 수 있다.
        for (let k = 0; k < words[i].length; k++) {
          if (words[i][k] !== current[k]) {
            diffCount += 1;
          }
        }
        if (diffCount === 1) {
          visited[i] = true;
          dfs(words[i], count + 1);
          visited[i] = false;
        }
      }
    }
  };
  dfs(begin, 0);
  if (answer.length === 0) {
    return 0;
  }
  answer = Math.min(...answer);

  return answer;
}
solution(begin, target, words);
