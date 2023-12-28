//하나를 먼저 넣고
// 두 가지의 합이 넣은 한 가지와 같은지를

const number = [-2, 3, 0, 2, -5];

function solution(number) {
  let answer = 0;
  number.forEach((item, studentIndex) => {
    const compareArr = number.filter((item, index) => index > studentIndex);
    for (let i = 0; i < compareArr.length - 1; i++) {
      for (let j = i + 1; j < compareArr.length; j++) {
        if (item + compareArr[i] + compareArr[j] === 0) {
          answer = answer + 1;
        }
      }
    }
  });
  return answer;

  // 배열을 먼저 하나 넣는다
}
solution(number);
