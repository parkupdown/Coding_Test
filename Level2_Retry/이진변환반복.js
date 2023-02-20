const s = "110010101001";

function solution(s) {
  let zeroCount = 0;
  let transCount = 0;

  while (s !== "1") {
    const ArrLength = [...s].filter((item) => {
      if (item === "1") {
        return item;
      }
      if (item === "0") {
        zeroCount = zeroCount + 1;
      }
    }).length;
    s = ArrLength.toString(2);
    transCount = transCount + 1;
  }
  //0다 사라짐

  return [transCount, zeroCount];
}
solution(s);
