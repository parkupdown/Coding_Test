let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  record = record.map((item) => item.split(` `));
  const answer = [];
  let info = new Map();

  record.forEach((item) => {
    if (item[0] !== "Leave") {
      info.set(item[1], item[2]);
    }
  });

  info = [...info];

  const infoId = info.map((item) => item[0]);

  record.forEach((item) => {
    const recordId = infoId.indexOf(item[1]);
    if (item[0] === "Enter") {
      answer.push(`${info[recordId][1]}님이 들어왔습니다.`);
    } else if (item[0] === "Leave") {
      answer.push(`${info[recordId][1]}님이 나갔습니다.`);
    }
  });

  return answer;
}
solution(record);
