let elements = [7, 9, 1, 1, 4];
function solution(elements) {
  let answer = [];
  for (let i = 1; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      for (let z = j; z < j + i; z++) {
        sum = sum + elements[z % elements.length];
      }
      answer.push(sum);
    }
  }

  const answers = [...new Set(answer)].length;

  return answers + 1;
}
solution(elements);
