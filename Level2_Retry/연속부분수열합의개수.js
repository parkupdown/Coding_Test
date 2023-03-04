const elements = [7, 9, 1, 1, 4];

function solution(elements) {
  const elementsLength = elements.length;
  const answer = [];

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < elements.length + i; j++) {
      count = count + 1;
      sum = sum + elements[j % elementsLength];
      if (count > i) {
        answer.push(sum);
        count = 0;
        sum = 0;
        j = j - i;
      }
    }
  }
  return [...new Set(answer)].length;
}

solution(elements);
