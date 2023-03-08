let want = ["apple"];
let number = [3, 2, 2, 2, 1];
let discount = [
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
];

function solution(want, number, discount) {
  let answer = [];

  for (let i = 0; i <= discount.length - 10; i++) {
    let checkArr = number.map((item) => item);
    for (let j = i; j < i + 10; j++) {
      const numberIndex = want.indexOf(discount[j]);
      if (want.includes(discount[j]) && checkArr[numberIndex] !== 0) {
        checkArr[numberIndex] = checkArr[numberIndex] - 1;
      }
    }
    answer.push(checkArr.reduce((acc, cur) => acc + cur));
  }

  answer = answer.filter((item) => item === 0);

  return answer.length < 1 ? 0 : answer.length;
}
solution(want, number, discount);
