// 행렬이 곱한 값을 반환 하는 함수
let arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
let arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
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

function solution(arr1, arr2) {
  let answerArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let sumArr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let z = 0; z < arr2.length; z++) {
        sum = sum + arr1[i][z] * arr2[z][j];
      }
      sumArr.push(sum);
    }
    answerArr.push(sumArr);
  }
  return answerArr;
}
solution(arr1, arr2);
