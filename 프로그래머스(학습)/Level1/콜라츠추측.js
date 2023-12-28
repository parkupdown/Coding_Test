//콜라츠추측

const num = 16;

function solution(num) {
  let sum = num;
  let count = 0;
  while (sum !== 1) {
    if (sum === 1) {
      break;
    }
    if (sum % 2 === 0 && sum !== 1) {
      sum = sum / 2;
      count = count + 1;
    }
    if (sum % 2 === 1 && sum !== 1) {
      sum = sum * 3 + 1;
      count = count + 1;
    }
  }
  return count > 500 ? -1 : count;
}
solution(num);
