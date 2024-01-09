function solution(keymap, targets) {
  // target을 가지고 keymap에 두개 다 해봐서 다 작은걸 찾기
  const answer = [];
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    let sum = 0;
    let pass = true;
    for (let j = 0; j < target.length; j++) {
      const string = target[j];
      //A, B, C, D - A A B B
      const arr = keymap
        .map((key) => key.indexOf(string))
        .filter((item) => item !== -1);
      // 이렇게하면 -1이 나오면 해당 -1이 그 값이 되어버림

      if (arr.length === 0) {
        answer.push(-1);
        pass = false;
        break;
      }
      sum = sum + Math.min(...arr) + 1;
    }
    if (pass) {
      answer.push(sum);
    }
  }
  return answer;
}
