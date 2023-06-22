function solution(n, k) {
  const answer = [];
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  let caseOfAll = arr.reduce((acc, cur) => acc * cur, 1);
  //이걸 잘라야함
  while (n > 0) {
    const range = caseOfAll / n;
    let index = Math.floor((k - 1) / range);
    if (index === -1) {
      index = n - 1;
    }
    answer.push(arr[index]);
    arr.splice(index, 1);
    caseOfAll = caseOfAll / n;
    k = k % range;
    n = n - 1;
  }
  return answer;
}
// 성공~

function solution(n, k) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const visited = Array.from({ length: n }, () => false);
  let answer;
  let count = 0;
  const dfs = (sum) => {
    console.log(sum, count);
    //sum이 k개만큼인데 이 배열이 딱 8개까지만 형성되고 나머진 실행되지 않아야함
    // 이게 포인트.
    if (count < k) {
      if (sum.length === n) {
        count = count + 1;
        if (count === k) {
          answer = sum;
          return;
        }
      }

      for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
          visited[i] = true;
          dfs(sum + arr[i]);
          visited[i] = false;
        }
      }
    }
  };
  dfs(``);

  return answer.split(``).map((item) => item * 1);
}
solution(n, k);

let n = 4;
let k = 6;

function solution(n, k) {
  // n과 k는 계속 변하게 될거다.
  const nLength = n;
  const answer = [];
  let caseOfArr = Array.from({ length: n }, (v, i) => i + 1);
  let caseOfAll = caseOfArr.reduce((cur, acc) => acc * cur, 1);
  while (answer.length < nLength) {
    console.log(caseOfAll, caseOfArr, n, k);
    const range = caseOfAll / n;
    const index = Math.floor((k - 1) / range);
    answer.push(caseOfArr[index]);
    caseOfArr.splice(index, 1);
    caseOfAll = caseOfAll / n;
    k = k % range;
    n = n - 1;
    if (k === 0) {
      k = n;
    }
  }

  return answer;
}
solution(n, k);
