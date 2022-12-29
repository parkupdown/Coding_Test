const n = 5;
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
solution(n, lost, reserve);
