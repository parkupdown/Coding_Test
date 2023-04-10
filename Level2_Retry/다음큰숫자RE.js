const n = 78;
function solution(n) {
  const OneNum = n
    .toString(2)
    .split(``)
    .filter((item) => item === "1").length;

  const CheckOneNum = (number) => {
    const numberTwo = number.toString(2);
    const arrNumber = numberTwo.split(``).filter((item) => item === "1");

    return arrNumber.length;
  };

  for (let i = n + 1; i < 123123123; i++) {
    if (OneNum === CheckOneNum(i)) {
      return i;
    }
  }
}
solution(n);

//1. n부터 계속 반목분
//2. n의 2진수변환시 1의갯수
//3. 반복문 내에서 2진수 변환시 1의갯수 비교
