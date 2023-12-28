let tickets = [
  ["ICN", "A"],
  ["A", "B"],
  ["A", "C"],
  ["B", "A"],
  ["C", "A"],
];

function solution(tickets) {
  let answer = [];
  //먼저 ICN이 출발지인 Index를 찾자

  const ICNINDEX = tickets
    .map((item, index) => (item[0] === "ICN" ? index : false))
    .filter((item) => item !== false);

  //찾았으니까 이걸 기준으로 for문을 돌리는게 기본

  //방문을 기록해야하니까 visited를 생성
  let visited = Array.from({ length: tickets.length }, () => false);

  //이제 bfs함수를 만들어보자
  //firstIndex는 ICNIndex
  const bfs = (firstIndex, sum, count, airport) => {
    if (count === tickets.length - 1) {
      sum = "ICN," + sum.slice(0, -1);
      console.log(sum);
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
      return;
    }
    visited[firstIndex] = true;

    // firstIndex 방문처리

    for (let i = 0; i < tickets.length; i++) {
      if (visited[i] === false && tickets[i][0] === airport) {
        //지금 있는 공항의 위치를 기억해야함

        airport = tickets[i][1];
        sum = sum + airport + `,`;
        count = count + 1;
        visited[i] = true;
        bfs(firstIndex, sum, count, airport);

        //airport가 전으로 돌아와야함
        airport = tickets[i][0];
      }
    }
  };

  for (let i = 0; i < ICNINDEX.length; i++) {
    let sum = `${tickets[ICNINDEX[i]][1]},`;
    bfs(ICNINDEX[i], sum, 0, tickets[ICNINDEX[i]][1]);
    visited = Array.from({ length: tickets.length }, () => false);
  }
  answer = answer.sort((a, b) => (a > b ? 1 : -1));
  answer = answer.map((item) => item.split(`,`));
  answer = answer[0];

  return answer;
}
solution(tickets);

function solution(tickets) {
  // 주어진 항공권을 모두 이용해 경로를 짠다.
  // 항상 "ICN" 공항에서 출발
  // 방문하는 공항 경로를 배열에 담아 return
  // 알파벡 순서가 앞서는 경로로
  // 못가는 경우는 없다.

  // BFS 풀이법

  // 각 BFS의 경로마다의 index visited처리를 해주어야함
  const answer = [];

  const bfs = (airport, route, visited) => {
    const queue = [[airport, route, visited]];
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [currentAirport, currentRoute, currentVisited] = queue.shift();
        for (let j = 0; j < tickets.length; j++) {
          if (currentVisited[j] === false && currentAirport === tickets[j][0]) {
            currentVisited[j] = true;
            queue.push([
              tickets[j][1],
              currentRoute + "," + tickets[j][1],
              currentVisited,
            ]);
            if (currentVisited[j].includes(false) === false) {
              answer.push(route);
            }
          }
        }
      }
    }
  };
  const visited = Array.from({ length: tickets.length }, () => false);
  bfs("ICN", "ICN", visited);
  console.log(answer);
}
