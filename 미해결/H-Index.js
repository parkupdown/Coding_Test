/* const citations = [6, 5, 5, 5, 3, 2, 1, 0];

function solution(citations) {
  let Check = [];
  let answer = [];
  for (j = 0; j < citations.length; j++) {
    Check.push(citations[j]);
    let down = 0;
    let up = 0;
    for (i = 0; i < citations.length; i++) {
      if (Check[0] === citations[i]) {
        up = up + 1;
      }
      if (citations[i] > Check[0]) {
        up = up + 1;
      }
      if (citations[i] < Check[0]) {
        down = down + 1;
      }
    }
    if (up >= Check[0] && down <= Check[0]) {
      answer.push(Check[0]);
    }
    Check.pop();
  }
  return answer;
}
solution(citations);

const citations = [3, 0, 6, 1, 5];

function solution(citations) {
  let A = citations.sort((a, b) => a - b);
  let B = [];
  A.forEach((item, index) => {
    if (index + 1 >= item) {
      B.push(item);
    }
  });
  console.log(B);
}
solution(citations);
function solution(citations) {
  var answer = 0;
  return answer;
}*/
