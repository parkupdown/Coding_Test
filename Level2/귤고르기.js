const K = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

function solution(K, tangerine) {
  const sortArr = tangerine.sort();
  const checkArr = [];
  const answerArr = [];
  let count = 1;

  //[1,2,2,3,3,4,5,5]
  checkArr.push(sortArr[0]);
  console.log(sortArr);

  sortArr.forEach((item, index) => {
    if (checkArr[0] !== item) {
      checkArr.pop();
      checkArr.push(item);
      answerArr.push(count);
      count = 0;
    }
    if (checkArr[0] === item && index !== 0) {
      count = count + 1;
    }
    if (index === sortArr.length - 1) {
      answerArr.push(count);
    }
  });

  const answers = answerArr.sort((a, b) => b - a);

  let orange = K;
  for (let i = 0; i < answers.length; i++) {
    orange = orange - answers[i];
    if (orange <= 0) {
      return i + 1;
    }
  }
}
solution(K, tangerine);

// 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화

// 종류가 같은 게 많을 수록 !

// 숫자가 바뀌면
