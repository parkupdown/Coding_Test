const s = "(()(";

function solution(s) {
  let A = [...s];
  let count = 1;
  A.forEach((item, index) => {
    item === "(" ? (count = 1) : (count = count * 0);
    count === 0 ? A.splice(index - 1, 2) : (count = 1);
  });
}
solution(s);
//while문으로 A의 길이가 2이상이 될때까지로 설정
//그리고 A의 length 가 1이냐 0이냐로 return내면된다.
