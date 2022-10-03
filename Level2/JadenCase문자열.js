const s = "3people unFollowed me";

function solution(s) {
  let A = s.split(" ").map((item) => [...item]);
  let B = A.map((item) => item.map((item) => item.toLowerCase()));

  //forEach를 사용한다해서 기존 배열이 수정되진않음
  let count = 0;
  let answer = B.map((item) => {
    count = 0;
    return item.map((item) => {
      if (count > 0) {
        return item;
      }
      if (isNaN(item * 1) === true) {
        count++;
        return item.toUpperCase();
      } else {
        return item;
      }
    });
  });
  console.log(...answer);
}
solution(s);
