const s = "2three45sixseven";
//이걸 이제 숫자로 완벽변환해야함
//index를 기억하는부분
function solution(s) {
  const str = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrays = [...s];
  console.log(arrays);
  let dd = [];
  arrays.forEach(function (item) {
    if (isNaN(item) === false) {
      dd.push(item);
      dd.push(" ");
    } else {
      dd.push(item);
    }
  });
  console.log(dd.join(""));
}
solution(s);
//미해결
