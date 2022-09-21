const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
  let sum = 0;
  for (i = 1; i <= count; i++) {
    sum = sum + price * i;
  }
  return sum > money ? sum - money : 0;
}
