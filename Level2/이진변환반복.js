const s = "110010101001";

function solution(s) {
  let zerocount = 0;
  let changecount = 0;
  let answer = [];
  let A = [...s];
  while (A.length > 1) {
    let B = A.filter((item) => item !== "0");
    zerocount = zerocount + A.length - B.length;
    changecount = changecount + 1;
    let C = B.length.toString(2);
    A = [...C];
  }
  answer.push(changecount, zerocount);
  return answer;
}
solution(s);
