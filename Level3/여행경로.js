function solution(tickets) {
  let answer = [];
  const visited = Array.from({ length: tickets.length }, () => false);
  const dfs = (currentAir, sum) => {
    //언제 return 해야할까
    if (!visited.includes(false)) {
      answer.push(sum + `${currentAir}`);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && currentAir === tickets[i][0]) {
        visited[i] = true;
        dfs(tickets[i][1], sum + `${tickets[i][0]},`);
        visited[i] = false;
      }
    }
  };

  dfs("ICN", ``);

  answer = answer
    .map((item) => item.split(`,`).join(`,`))
    .sort((a, b) => (a > b ? 1 : -1))
    .map((item) => item.split(`,`));

  return answer[0];
}
