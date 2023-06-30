function solution(n, s) {
  // 일단 s를 n으로 나눈 숫자들을 가지고옴
  // s를 n으로 나누면서 나머지를 제외 한 Math.floor을하면됨
  const answer = [];
  if (s / n < 1) {
    return [-1];
  }
  while (true) {
    const result = Math.floor(s / n);
    s = s - result; // 빠지게되고
    n = n - 1; //n은하나줄어들고
    answer.push(result);

    if (n === 1) {
      answer.push(s);
      break;
    }
  }
  return answer;
}
