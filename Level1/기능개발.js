function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length > 0) {
    let count = 0;
    for (i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }

    while (progresses[0] >= 100) {
      count = count + 1;
      progresses.shift();
      speeds.shift();
    }
    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}
