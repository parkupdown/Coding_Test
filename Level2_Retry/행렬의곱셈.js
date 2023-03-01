//4시 30분 =>
const arr1 = [
  [2, 3, 2],
  [4, 2, 4],
  [3, 1, 4],
];
const arr2 = [
  [5, 4, 3],
  [2, 4, 1],
  [3, 1, 1],
];

function solution(arr1, arr2) {
  const arr2Length = arr2.length;
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    const count = arr2[1].length;
    for (let j = 0; j < count; j++) {
      let sum = 0;
      for (let k = 0; k < arr2Length; k++) {
        sum = sum + arr1[i][k] * arr2[k][j];
      }
      arr.push(sum);
      //index1 이 2까지 인데 arr2의 내부 arr은 1까지임
    }

    answer.push(arr);
  }

  return answer;
}

solution(arr1, arr2);
