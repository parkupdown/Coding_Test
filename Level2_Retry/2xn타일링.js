function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}
let n = 5;

function solution(n) {
  var answer = 0;

  // 타일을 채우는 방법의 가지 수
  // 경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.

  search(0);

  // DFS
  function search(step) {
    if (step === n) return answer++; // answer = (answer+1)%1000000007
    if (step > n) return;
    // 가로
    console.log(step);
    search(step + 2);
    // 세로
    console.log(step);
    search(step + 1);
  }

  return answer; // answer%1000000007
}
solution(n);
