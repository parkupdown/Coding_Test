function solution(n, k) {
  // 줄서는 방법
  //3명이 있다면 [1,2,3] [1,3,2] , [2,1,3] , [2,3,1],[ 3,1,2],[3,2,1]
  // 1,2,3 이 있을 것이고
  // 방문한 곳은 다시 방문하지 않는다.
  // 만약 길이가 n과 같아지면 탈출
  // k번째 일때
  //근데 k가 너무큰데 일단해보자
  // 일단 k일때 멈추는건 맞다

  const arr = Array.from({ length: n }, (_, index) => index + 1);
  const visited = Array.from({ length: n }, () => false);
  let count = 0;
  let answer;
  const dfs = (sum) => {
    if (answer !== undefined) {
      return;
    }
    if (sum.length === n) {
      // 만약 sum의 길이가 원하는 길이가 되면 이제 탈출하는데 이때가 중요
      // 이때 그 count 횟수가 k와 같다면 원하는 줄서는 경우임으로 그때의 sum은 정답이됨
      count = count + 1;
      if (count === k) {
        answer = sum.split(``).map((item) => parseInt(item));
      }
    }
    for (let i = 0; i < n; i++) {
      // 만약 방문하지 않은 index라면 들어가야지
      if (!visited[i]) {
        visited[i] = true;
        dfs(sum + arr[i]);
        visited[i] = false;
      }
    }
  };
  dfs(``);

  return answer;
}
// 이렇게 하면 테스트 케이스는 통과했지만
// 효율성 테스트를 통과하지못한다.
// 왜냐하면 n은 20이하의 자연수인데 k는 n!이하의 자연수이기때문

//k 를 보고 바로 알아맞춰야함
let n = 6;
let k = 5;
function solution(n, k) {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  // 결국 팩토리얼과 나머지에 따라 달라지는 n의 숫자가 됨

  //결국 주기는 => 3!
  // 팩토리얼을 만드는 함수를 먼저 만들어야지
  const answer = [];
  const factorial = (num) => {
    if (num === 1) {
      return num;
    }
    return num * factorial(num - 1);
  };
  if (n === 1) {
    return [1];
  }

  while (n > 0) {
    const max = factorial(n) / n;
    // 자릿수를 알기 위해 주기를 구한 것
    // 이걸로 이제 나눠줘야지 k를
    let index = Math.ceil(k / max) - 1;

    k = k % max;
    if (k === 0) {
      k = max;
    }
    answer.push(arr[index]);
    arr.splice(index, 1);
    n = n - 1;
  }

  return answer;
}

solution(n, k);
// 풀었다!!
