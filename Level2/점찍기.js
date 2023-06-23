function solution(k, d) {
  const makeSqrt = (a, b) => {
    return a * a + b * b;
  };

  const dd = d * d;

  let answer;

  const dfs = (UD, RL, count) => {
    const result = makeSqrt(UD, RL);

    if (UD > d) {
      answer = count;
      return;
    }

    if (result > dd || RL > d) {
      dfs(UD + k, 0, count);
    } else if (result <= dd) {
      dfs(UD, RL + k, count + 1);
    }
  };

  dfs(0, 0, 0);
  return answer;
}
