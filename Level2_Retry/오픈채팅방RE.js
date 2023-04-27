let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let userInfo = new Map();

  record = record.map((item) => item.split(` `));

  record.forEach((item) => {
    if (item[0] === "Enter" || item[0] === "Change") {
      userInfo.set(item[1], item[2]);
    }
  });

  const answer = record
    .map((item) => {
      if (item[0] === "Enter") {
        return `${userInfo.get(item[1])}님이 들어왔습니다.`;
      }
      if (item[0] === "Leave") {
        return `${userInfo.get(item[1])}님이 나갔습니다.`;
      }
    })
    .filter((item) => item !== undefined);

  return answer;
}

solution(record);
