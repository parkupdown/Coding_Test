//5시 20분
let k = 4;
let tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

function solution(k, tangerine) {
  let check = [];
  let answerArr = [];
  for (let i = 0; i < tangerine.length; i++) {
    if (check.includes(tangerine[i]) === false) {
      check.push(tangerine[i]);
      answerArr[tangerine[i]] = 1;
      continue;
    }
    answerArr[tangerine[i]] = answerArr[tangerine[i]] + 1;
  }
  console.log(answerArr);
  const answer = answerArr
    .sort((a, b) => b - a)
    .reduce((acc, cur, index) => {
      console.log(acc);
      if (acc === k) {
        console.log(index);
        return index - 1;
      }
      if (acc > k) {
        console.log(index);
        return index - 2;
      }

      return acc + cur;
    });

  return answer > k ? 1 : answer;
}
solution(k, tangerine);
