function solution(progresses, speeds) {
  //100되어야 가능
  const answer = [];
  while (progresses.length > 0) {
    let count = 0;
    //진행상황의 배열의 길이가 0이되기전까진계속반복
    for (let i = 0; i < progresses.length; i++) {
      // 각 index마다 speeds를 더해줌
      progresses[i] = progresses[i] + speeds[i];
    }
    while (progresses[0] >= 100) {
      count = count + 1;
      progresses.shift();
      speeds.shift();
    }
    if (count !== 0) {
      answer.push(count);
    }
  }
  return answer;
}
