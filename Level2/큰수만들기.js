function solution(number, k) {
  // number에서 k개를 제거했을 때 얻을 수 있는 가장 큰 수를 구하자

  // 1231234 => k=>2 면??
  // 12 더 큰게나왔지? 그럼 1삭제 23 더큰게나왔지? 그럼 31234

  // 이게 기본 로직임
  const stack = [number[0]];

  for (let i = 1; i < number.length; i++) {
    if (stack.length === number.length) {
      break;
    }
    if (stack[stack.length - 1] < number[i]) {
      while (stack[stack.length - 1] < number[i]) {
        stack.pop();
        k = k - 1;
        if (k === 0) {
          const sliced = number.slice(i);
          return [...stack, ...sliced].join(``);
        }
      }
      stack.push(number[i]);
    } else {
      stack.push(number[i]);
    }
  }
  return stack.slice(0, number.length - k).join(``);
}
// 그리디 알고리즘으로해결
