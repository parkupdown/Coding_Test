let numbers = [2, 3, 3, 5];

function solution(numbers) {
  const Length = numbers.length;
  const answer = [];
  while (Length > answer.length) {
    const target = numbers.shift();
    const filtered = numbers.filter((item) => item > target);
    filtered.length === 0 ? answer.push(-1) : answer.push(filtered[0]);
  }
  return answer;
}
solution(numbers);

/*
let numbers = [2, 3, 3, 5];
function solution(numbers) {
  const NumLength = numbers.length;
  const answer = [];
  for (let i = 0; i < NumLength; i++) {
    if (numbers.length === 1) {
      answer.push(-1);
      break;
    }

    const target = numbers.shift();
    const filterArr = numbers.filter((item) => target < item);
    filterArr.length === 0 ? answer.push(-1) : answer.push(filterArr[0]);
  }
  return answer;
}
solution(numbers);
*/
/*
let numbers = [2, 3, 3, 5];

function solution(numbers) {
  const numbersLength = numbers.length;
  let answer = [];
  let target;
  while (answer.length < numbersLength) {
    if (numbers.length === 1) {
      answer.push(-1);
    }
    target = numbers[0];
    numbers.shift();
    const Max = Math.max(...numbers);
    for (let i = 0; i < numbers.length; i++) {
      if (Max <= target) {
        answer.push(-1);
        break;
      }
      if (target < numbers[i]) {
        answer.push(numbers[i]);
        break;
      }
    }
  }
  return answer;
}
solution(numbers);
*/
