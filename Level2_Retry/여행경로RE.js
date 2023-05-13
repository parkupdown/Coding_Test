let tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

function solution(tickets) {
  let answer = [];
  const ICNIndexArr = tickets
    .map((item, index) => (item[0] === "ICN" ? index : null))
    .filter((item) => item !== null);
  //ICN이있는인덱스를찾음

  let visited = Array.from({ length: tickets.length }, () => false);
  // 방문확인을위해 배열생성

  let target;

  const dfs = (firstPort, sum, count) => {
    if (count === 0) {
      target = firstPort;
    }

    if (count === tickets.length - 1 && !answer.includes(sum)) {
      sum = "ICN" + ` ` + firstPort + ` ` + sum.slice(0, -1);
      answer.push(sum);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (visited[i] === false && target === tickets[i][0]) {
        visited[i] = true;
        target = tickets[i][1];
        sum = sum + target + ` `;
        count = count + 1;
        console.log(sum);
        dfs(firstPort, sum, count);

        target = tickets[i][0];
      }
    }
  };

  for (let i = 0; i < ICNIndexArr.length; i++) {
    visited[ICNIndexArr[i]] = true;
    dfs(tickets[ICNIndexArr[i]][1], ``, 0);
    visited = Array.from({ length: tickets.length }, () => false);
  }

  answer = answer
    .sort((a, b) => (a > b ? 1 : -1))
    .map((item) => item.split(` `));

  return answer[0];
}

solution(tickets);
