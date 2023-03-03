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
