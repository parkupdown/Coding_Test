function solution(queue1, queue2) {
  let answer = 0;
  let Q1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let Q2 = queue2.reduce((acc, cur) => acc + cur, 0);

  let Q1Index = 0;
  let Q2Index = 0;

  while (true) {
    if (Q1Index === queue1.length || Q2Index === queue2.length) {
      return -1;
    }
    if (Q1 < Q2) {
      const insert = queue2[Q2Index];
      queue1.push(insert);
      Q1 = Q1 + insert;
      Q2 = Q2 - insert;
      Q2Index++;
    } else if (Q1 > Q2) {
      const insert = queue1[Q1Index];
      queue2.push(insert);
      Q1 = Q1 - insert;
      Q2 = Q2 + insert;
      Q1Index++;
    } else if (Q1 === Q2) {
      return answer;
    }
    answer++;
  }
}
//메모리초과
