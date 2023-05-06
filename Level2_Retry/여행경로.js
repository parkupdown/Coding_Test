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
