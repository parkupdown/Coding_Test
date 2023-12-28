function solution(storey) {
  storey = String(storey)
    .split(``)
    .map((item) => parseInt(item))
    .reverse();
  const answer = [];

  const dfs = (target, index, step, res) => {
    if (index === storey.length) {
      if (res === "더함") {
        answer.push(step + 1);
      } else {
        answer.push(step);
      }

      return;
    }

    if (target === 0) {
      dfs(storey[index + 1], index + 1, step, "그냥");
    } else if (target !== 0) {
      dfs(storey[index + 1] + 1, index + 1, step + 10 - target, "더함");
      dfs(storey[index + 1], index + 1, step + target, "뺌");
    }
  };

  dfs(storey[0], 0, 0, "그냥");

  return Math.min(...answer);
}
