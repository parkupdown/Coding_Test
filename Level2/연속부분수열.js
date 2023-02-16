const elements = [7, 9, 1, 1, 4];
function solution(elements) {
  const length = elements.length;

  const answer = [];
  for (let i = 0; i < elements.length; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < elements.length + i; j++) {
      sum = sum + elements[j % length];
      count = count + 1;
      if (count > i) {
        answer.push(sum);
        sum = 0;
        count = 0;
        j = j - i;
      }
    }
  }
  const answerCount = [...new Set(answer)];

  return answerCount.length;
}

solution(elements);
