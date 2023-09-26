function solution(n, money) {
  // 기본적으로 각 자리수 마다 모든 money에 있는 배열을 대입해보는게 맞다.
  const visited = Array.from({ length: money.length }, () => false);

  let answer = [];

  const dfs = (sum, test) => {
    if (sum >= n) {
      //이게 핵심인데
      if (sum === n) {
        answer.push(test);
      }
      return;
    }

    for (let i = 0; i < money.length; i++) {
      dfs(sum + money[i], test + String(money[i]));
    }
  };
  dfs(0, ``);

  answer = answer.map((item) =>
    item
      .split(``)
      .sort((a, b) => (a > b ? 1 : -1))
      .join(``)
  );

  answer = [...new Set(answer)].length;

  return answer % 1000000007;
}
