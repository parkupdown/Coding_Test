const brown = 24;
const yellow = 24;
function solution(brown, yellow) {
  const sum = brown + yellow;
  let answers = [];
  let ARR = [];
  let index = 2;
  while (index < sum) {
    if (sum % index === 0) {
      ARR.push(index); //ARR은 약수의모임
    }
    index += 1;
  }
  let RRA = ARR.reverse();

  for (i = 0; i < ARR.length / 2; i++) {
    if (RRA[i] * 2 + (sum / RRA[i]) * 2 - 4 === brown) {
      answers.push(RRA[i], sum / RRA[i]);
      return answers;
    }
  }
}
solution(brown, yellow);
//갈색 카펫과 노란 카펫을 통해 크기를 추론하는문제
//일단 먼저 갈색과 노란색을 모두 합친 총 타일의 갯수를 먼저 구한다.
// 타일의 갯수를 구한 후 그 약수 곱셈이 가능 한 숫자들을 구한후

//  [큰수,작은수] 후 큰수 x 2 + (작은수-2) X 2 가
//되는 수가 정답이다.
