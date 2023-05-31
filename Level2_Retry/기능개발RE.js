function solution(progresses, speeds) {
  const answer = [];
  let count = 0;
  while (progresses.length > 0) {
    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count = count + 1;
    }
    if (progresses[0] < 100) {
      if (count !== 0) {
        answer.push(count);
        count = 0;
      }
      for (let i = 0; i < progresses.length; i++) {
        progresses[i] = progresses[i] + speeds[i];
      }
      //[0]인덱스가 100보다 작은경우에만 for문이 돌아가도록함
    }
  }
  if (count !== 0) {
    answer.push(count);
  }

  return answer;
}
