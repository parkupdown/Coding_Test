const arr1 = [
  [2, 3, 2, 5],
  [2, 3, 2, 4],
  [4, 2, 4, 2],
];
const arr2 = [
  [2, 4, 1],
  [3, 1, 1],
  [3, 1, 4],
  [3, 1, 4],
];
function solution(arr1, arr2) {
  let answer = [];
  for (i = 0; i < arr1.length; i++) {
    let answers = [];
    let count = arr2[1].length;
    for (j = 0; j < count; j++) {
      let sum = 0;
      for (k = 0; k < arr2.length; k++) {
        sum = sum + arr1[i][k] * arr2[k][j];
      }
      answers.push(sum);
    }
    answer.push(answers);
  }
  return answer;
}
solution(arr1, arr2);
//더해지는 순서를 잘 분석해야한다.
