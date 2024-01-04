function solution(players, callings) {
  const obj = {};

  players.forEach((item, index) => (obj[item] = index));

  callings.forEach((call) => {
    const index = obj[call];
    players[index] = players[index - 1];
    players[index - 1] = call;
    //여기서 스위칭됨

    //이제 Obj도 수정

    obj[call] = obj[call] - 1;
    obj[players[index]] = obj[players[index]] + 1;

    //얘가 순서를 보여줌
  });
  return players;
}
