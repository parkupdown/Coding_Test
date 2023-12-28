function solution(prices) {
  // 떨어지는시점을 생각하면댐
  const answer = [];
  for (let i = 0; i < prices.length - 1; i++) {
    const target = prices[i];
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count = count + 1;
      if (target > prices[j]) {
        // 더 작은게 있다면?
        answer.push(count);
        break;
      }
      //그럼 끝까지 없었다면?
      if (j === prices.length - 1) {
        answer.push(count);
      }
    }
    //break;가 된 부분이 있는데 또 push돼서 2번 push되는 문제가 발생
  }
  answer.push(0);

  return answer;
}
