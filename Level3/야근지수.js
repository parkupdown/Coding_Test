function solution(n, works) {
  let index = 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    works[index] = works[index] - 1;
    if (works[index + 1] > works[index]) {
      index = index + 1;
    }
    n = n - 1;
    if (works[index] < 0) {
      return 0;
    }
  }

  const answer = works.reduce((acc, cur) => acc + cur ** 2, 0);

  return answer;
}
//33점
function solution(n, works) {
  let index = 0;
  works.sort((a, b) => b - a);

  while (n > 0) {
    works[index] = works[index] - 1;
    if (works[index + 1] > works[index] || works[index] <= 0) {
      index = index + 1;
    }
    n = n - 1;
    if (index === works.length) {
      return 0;
    }
  }

  const answer = works.reduce((acc, cur) => acc + cur ** 2, 0);

  return answer;
}
