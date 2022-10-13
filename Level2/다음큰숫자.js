const n = 78;
function solution(n) {
  let count = [...n.toString(2)].filter((item) => item === "1").length;
  for (i = 1; i < 1000000; i++) {
    let A = n + i;
    if ([...A.toString(2)].filter((item) => item === "1").length === count) {
      return A;
    }
  }
}
solution(n);

const RR = "love you , love, everything, love";
console.log(RR.match(/love/gi)); //없으면 null
