function solution(s) {
  // 첫글자를 x
  // 첫글자와 같은숫자 다른숫가 갯수같으면 분리
  let first = s[0];
  let check = [0, 0];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    first === s[i] ? check[0]++ : check[1]++;
    let [same, dif] = check;
    if (same === dif) {
      if (i === s.length - 1) {
        return ++answer;
      }
      answer++;
      first = s[i + 1];
      check = [0, 0];
    }
  }
  if (check[0] > 0 || check[1] > 0) {
    answer++;
  }

  return answer;
}
