const lotteries = [
  [50, 1, 50],
  [100, 199, 100],
  [1, 1, 500],
];
function solution(lotteries) {
  //로또를 먼저 순회
  const arr = [];
  lotteries.forEach((lotto) => {
    arr.push(lotto[0] / (lotto[1] + 1));
  });

  const max = Math.max(...arr);

  const filteredArr = lotteries.filter((arr) => arr[0] / (arr[1] + 1) === max);
  if (filteredArr.lenngth > 1) {
    filteredArr.sort((a, b) => b[2] - a[2]);
  }

  for (let i = 0; i < lotteries.length; i++) {
    if (lotteries[i] === filteredArr[0]) {
      return i + 1;
    }
  }
}
solution(lotteries);
