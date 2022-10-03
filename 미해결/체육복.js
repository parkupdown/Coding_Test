/*const n = 5;
const lost = [2, 4];
const reserve = [3];

function solution(n, lost, reserve) {
  const A = lost.sort();
  const B = reserve.sort();
  let lostA = A.map((item) => item - 1);

  for (i = 0; i < lostA.length; i++) {
    if (B.includes(lostA[i]) === true) {
      lostA.splice(i, 1);
    }
  }
  let lostAplus = lostA.map((item) => item + 2);

  for (i = 0; i < lostAplus.length; i++) {
    if (B.includes(lostAplus[i]) === true) {
      lostAplus.splice(i, 1);
    }
  }
  return n - lostAplus.length;
}
solution(n, lost, reserve);*/

/*const n = 5;
const lost = [2, 4];
const reserve = [3];

function solution(n, lost, reserve) {
  const lostm = lost.map((item) => item - 1);
  const lostp = lost.map((item) => item + 1);
  const SumArray = [...lostm, ...lostp].sort(); //1,3,3,5
  let reservesum = reserve.sort(); //1,3,5
  let count = 0;
  for (i = 0; i < SumArray.length; i++) {
    if (reservesum.includes(SumArray[i])) {
      count = count + 1;
    }
  }
  return count > lost.length ? n : n - lost.length - count;
}

solution(n, lost, reserve);*/
/*
const n = 5;
const lost = [2, 4];
const reserve = [3];

function solution(n, lost, reserve) {
  const lost1 = lost.filter((item) => !reserve.includes(item)); //중복값제거한Lost 이때 reserve도 사라져야함
  const lost2 = lost1.filter((item) => !reserve.includes(item + 1));
  const lost3 = lost2.filter((item) => !reserve.includes(item - 1));

  return n - lost3.length;
}
solution(n, lost, reserve);
//arrA.filter(it => arrB.includes(it))*/
const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

function solution(n, lost, reserve) {
  let T = lost.sort((a, b) => a - b);
  let R = reserve.sort((a, b) => a - b);
  for (i = 0; i < T.length; i++) {
    for (let j = 0; j < R.length; j++) {
      if (T[i] === R[j]) {
        T.splice(i, 1);
        R.splice(j, 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }

  let M = T.map((item) => item + 1); //[1,3]
  for (i = 0; i < M.length; i++) {
    for (let j = 0; j < R.length; j++) {
      if (M[i] === R[j]) {
        M.splice(i, 1);
        R.splice(j, 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }
  let P = M.map((item) => item - 2);
  for (i = 0; i < P.length; i++) {
    for (let j = 0; j < R.length; j++) {
      if (P[i] === R[j]) {
        P.splice(i, 1);
        R.splice(j, 1);
        i = i - 1;
        j = j - 1;
      }
    }
  }
  return n - P.length;
}
solution(n, lost, reserve); //80점
