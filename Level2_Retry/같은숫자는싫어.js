function solution(arr) {
  const answer = [];

  let target = arr[0];
  arr.forEach((item) => {
    if (target !== item) {
      answer.push(target);
      target = item;
    }
  });
  if (target !== answer[answer.length - 1]) {
    answer.push(target);
  }

  return answer;
}
