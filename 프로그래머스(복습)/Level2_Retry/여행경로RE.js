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

// BFS 풀이법

function solution(tickets) {
  // 주어진 항공권을 모두 이용해 경로를 짠다.
  // 항상 "ICN" 공항에서 출발
  // 방문하는 공항 경로를 배열에 담아 return
  // 알파벡 순서가 앞서는 경로로
  // 못가는 경우는 없다.

  // BFS 풀이법

  // 각 BFS의 경로마다의 index visited처리를 해주어야함
  let answer = [];

  const bfs = (airport, route, visited) => {
    const queue = [[airport, route, visited]];
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [currentAirport, currentRoute, currentVisited] = queue.shift();
        if (currentVisited.includes(false) === false) {
          answer.push(currentRoute);
          break;
        }

        for (let j = 0; j < tickets.length; j++) {
          if (currentVisited[j] === false && currentAirport === tickets[j][0]) {
            // 여기서 각 티켓마다 다르게 넣어주려면
            const copy = [...currentVisited];
            copy[j] = true;
            //각 티켓마다 생기는게 아니다보니 그렇고만
            // 여기서 true가 되었던게 또 true가 되는문제
            // 여기서 true를 빼주는게 맞는데
            queue.push([
              tickets[j][1],
              currentRoute + "," + tickets[j][1],
              copy,
            ]);
          }
        }
      }
    }
  };
  const visited = Array.from({ length: tickets.length }, () => false);
  bfs("ICN", "ICN", visited);
  answer.sort((a, b) => (a > b ? 1 : -1));
  answer = answer[0].split(`,`);
  return answer;
}

function solution(tickets) {
  // DFS 방식으로
  let answer = [];
  const visited = Array.from({ length: tickets.length }, () => false);

  const dfs = (airport, route) => {
    if (!visited.includes(false)) {
      // 모두방문하면
      answer.push(route);
      return;
    }
    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === airport) {
        visited[i] = true;
        dfs(tickets[i][1], route + "," + tickets[i][1]);
        visited[i] = false;
      }
    }
  };
  dfs("ICN", "ICN");

  answer.sort((a, b) => (a > b ? 1 : -1));
  answer = answer[0].split(`,`);
  return answer;
}
