const s = "baabaa";
function solution(s) {
  let A = [...s];
  let B = [];
  for (i = 0; i < A.length; i++) {
    if (A[i] === B[B.length - 1]) {
      B.pop();
    } else if (A[i] !== B[B.length - 1]) {
      B.push(A[i]);
    }
  }
  return B.length === 0 ? 1 : 0;
}
solution(s);

//붙어있는 같은 알파벳 짝을 제거 하기
//문자열은 모두 소문자알파벳으로 이루어져있다.
//연속하는 중복값

/*function solution(s) {
  const Arr = [...s];
  console.log(Arr);
  for (i = 0; i < Arr.length; i++) {
    if (Arr[i] === Arr[i + 1]) {
      Arr.splice(i, 2);
      i = -1;
    }
  }
  if(Arr.length>0){
return 0
  }
  else {return 1
}
} 


const s = "baabaa";
function solution(s) {
  let A = [...s];

  for (i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      A.splice(i, 2);
      i = -1; // 왜 안사라지지?
    } //같을때만 리셋하면안되겠다.
  }
  return A.length === 0 ? 1 : 0;
}
solution(s);

*/
