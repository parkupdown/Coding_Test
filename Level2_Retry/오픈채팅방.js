let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  record = record.map((item) => item.split(` `));
  let answer = new Map();
  const answerArr = [];

  for (let i = 0; i < record.length; i++) {
    if (record[i][0] === `Enter`) {
      answer.set(record[i][1], record[i][2]);
      answerArr.push([record[i][1], record[i][0]]);
    }
    if (record[i][0] === `Leave`) {
      answer.set(record[i][1], record[i][2]);
      answerArr.push([record[i][1], record[i][0]]);
    }
    if (record[i][0] === `Change`) {
      const Index = answerArr.indexOf(answer.get(record[i][1]));
      answer.set(record[i][1], record[i][2]);
      answerArr[Index] = answer.get(record[i][1]);
    }
  }
  answer = [...answer];
}
solution(record);
