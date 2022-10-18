//최소공배수를 반환

const arr = [1, 2, 3];

function solution(arr) {
  const B = arr[arr.length - 1];
  let A = arr[arr.length - 1]; //14
  if (arr.length === 1) {
    return arr[0];
  }

  for (i = 0; i < arr.length - 1; i++) {
    if (A % arr[i] !== 0) {
      A = A + B;
      i = -1;
    }
  }
  return A;
}
solution(arr);
//성공!
