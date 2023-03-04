const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
function solution(progresses, speeds) {
  const check = [];
  let count = 0;
  while (check.length < progresses.length) {
    count = count + 1;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
      console.log(progresses);
      if (progresses[i] >= 100 && check[i] === undefined) {
        check[i] = count;
      }
      console.log(check);
    }
  }

  const answer = [];
  let target = check[0];
  let answerCount = 1;
  console.log(check);
  for (let i = 1; i < check.length; i++) {
    if (check[i] > target) {
      target = check[i];
      answer.push(answerCount);
      answerCount = 1;
    } else if (check[i] <= target) {
      answerCount = answerCount + 1;
    }
  }
  answer.push(answerCount);

  return answer;
}
solution(progresses, speeds);
/* const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
  let count = 0;
  const answer = [];
  while (progresses.length > 0) {
    if (progresses[0] >= 100) {
      progresses.shift();
      count = count + 1;
    }
    if (progresses[0] < 100) {
      if (count !== 0) {
        answer.push(count);
      }
      count = 0;
      for (let i = 0; i < progresses.length; i++) {
        progresses[i] = progresses[i] + speeds[i];
      }
    }
  }
  if (count !== 0) {
    answer.push(count);
  }
  return answer;
}
solution(progresses, speeds);
*/
/*
let progresses = [93, 30, 55];
let speeds = [1, 30, 5];
function solution(progresses, speeds) {
  let check = [];
  let count = 0;
  while (progresses.length > 0) {
    count = count + 1;
    progresses[0] = progresses[0] + speeds[0];
    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      check.push(count);
      count = 0;
    }
  }

  return answer;
}
solution(progresses, speeds);

*/
