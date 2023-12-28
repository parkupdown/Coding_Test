let numbers = [9, 1, 5, 3, 6, 2];

function solution(numbers) {
  const answer = [];
  let target = -1;
  let index = 0;
  while (answer.length < numbers.length) {
    if (numbers[index] > target) {
      target = numbers[index];
    }
    index = index + 1;
  }
}
/*
function solution(numbers) {
  const answer = [];
  let index = 1;
  let target = -1;
  while (numbers.length>0) {
    target = numbers[0];
    const max = Math.max(...numbers);
    if (numbers[0] === max) {
      answer.push(-1);
      numbers.shift();
    } else if (target < numbers[index]) {
      answer.push(numbers[index]);
      numbers.shift();
      index = 1;
    } else {
      index = index + 1;
    }
  }
  return answer;
}
solution(numbers);
*/
