function solution(id_list, report, k) {
  // 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송

  // 각 유저는 한 번에 한 명의 유저를 신고할 수 있다.
  // 한 유저를 여러번 할 순 있지만 동일 한 유저는 신고횟수 1회로 처리

  // K번 이상 신고된 유저는 게시판 이용 정지

  // 신고한 사람 기준으로 처리 결과를 알려줌

  // string을 기준으로 value를 찾는 문제이니 "Hash" 써보자

  const map = new Map();
  const ban = [];
  report = [...new Set(report)];

  //이제 그냥 지목된 것중 2번이상인거 answer에 추가

  for (let i = 0; i < report.length; i++) {
    const complain = report[i].split(` `);
    const oldHand = map.get(complain[1]);
    if (oldHand !== undefined) {
      //지목당한게처음이아니라면
      map.set(complain[1], oldHand + 1);
    } else if (oldHand === undefined) {
      //지목당한게처음이라면
      map.set(complain[1], 1);
    }
  }
  const answer = Array.from({ length: id_list.length }, () => 0);
  // 정답배열생성

  for (let i = 0; i < report.length; i++) {
    const arr = report[i].split(` `);
    if (map.get(arr[1]) >= k) {
      const index = id_list.indexOf(arr[0]);
      answer[index] = answer[index] + 1;
      // 만약 지목당한 Hash에 지목당한놈이있고 k보다 더 크거나 같다면
      // answer[index]에 +1을 하자
    }
  }

  return answer;
}
