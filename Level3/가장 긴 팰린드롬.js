function solution(s) {
  // 앞뒤가 똑같은 문자열을 팰린드롬
  // 앞 뒤가 똑같은 문자열 중 가장 긴 길이를 return 해라

  // 뒤집기 전에 만들 수 있는 모든 s의 부분 문자열을 구한다?
  // 중요한건 순서가 뒤바뀌지 않아야한다.
  // 그리고 뒤집은 배열에서 문자가 있는지 확인한다?

  // 시간초과 나지 않나
  // abcdcba : abcdcba
  // abacde : edcaba

  // 하난 뒤집고 가능한 조합을 비교

  const makePermutation = (s) => {
    const visited = Array.from({ length: s.length }, () => false);
    const arr = [];
    const dfs = (index, fixIndex, sum) => {
      if (index === s.length) {
        return;
      }
      if (index < fixIndex) {
        dfs(index + 1, fixIndex, sum);
      } else if (index >= fixIndex && !visited[index]) {
        visited[index] = true;
        dfs(index + 1, fixIndex, sum + s[index]);
        if (sum !== ``) {
          arr.push(sum + s[index]);
        }
        visited[index] = false;
      }
    };
    for (let i = 0; i < s.length; i++) {
      dfs(0, i, ``);
    }
    return arr;
  };
  const sReverse = [...s.split(``).reverse()];
  const arr = makePermutation(s);
  const copyArr = makePermutation(sReverse);

  for (let i = 0; i < copyArr.length; i++) {
    if (arr.includes(copyArr[i])) {
      return copyArr[i].length;
    }
  }
  console.log();
}
solution(s);
//20점

function solution(s) {
  // 앞뒤가 똑같은 문자열을 팰린드롬
  // 앞 뒤가 똑같은 문자열 중 가장 긴 길이를 return 해라

  // 뒤집기 전에 만들 수 있는 모든 s의 부분 문자열을 구한다?
  // 중요한건 순서가 뒤바뀌지 않아야한다.
  // 그리고 뒤집은 배열에서 문자가 있는지 확인한다?

  // 시간초과 나지 않나
  // abcdcba : abcdcba
  // abacde : edcaba

  // 하난 뒤집고 가능한 조합을 비교

  const makePermutation = (s) => {
    const visited = Array.from({ length: s.length }, () => false);
    const arr = [];
    const dfs = (index, fixIndex, sum) => {
      if (index === s.length) {
        return;
      }
      if (index < fixIndex) {
        dfs(index + 1, fixIndex, sum);
      } else if (index >= fixIndex && !visited[index]) {
        visited[index] = true;
        dfs(index + 1, fixIndex, sum + s[index]);
        if (sum !== ``) {
          arr.push(sum + s[index]);
        }
        visited[index] = false;
      }
    };
    for (let i = 0; i < s.length; i++) {
      dfs(0, i, ``);
    }
    return arr;
  };
  const sReverse = [...s.split(``).reverse()];
  const arr = makePermutation(s);
  const copyArr = makePermutation(sReverse);

  const answer = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (arr.includes(copyArr[i])) {
      console.log(copyArr[i]);
      answer.push(copyArr[i].length);
    }
  }

  return Math.max(...answer);
} // 60점

let s = "asdasdasd";
function solution(s) {
  // 앞뒤가 똑같은 문자열을 팰린드롬
  // 앞 뒤가 똑같은 문자열 중 가장 긴 길이를 return 해라

  // 뒤집기 전에 만들 수 있는 모든 s의 부분 문자열을 구한다?
  // 중요한건 순서가 뒤바뀌지 않아야한다.
  // 그리고 뒤집은 배열에서 문자가 있는지 확인한다?

  // 시간초과 나지 않나
  // abcdcba : abcdcba
  // abacde : edcaba

  // 하난 뒤집고 가능한 조합을 비교

  const makePermutation = (s) => {
    const visited = Array.from({ length: s.length }, () => false);
    const arr = [];
    const dfs = (index, fixIndex, sum) => {
      if (index === s.length) {
        arr.push(sum);
        return;
      }
      if (index < fixIndex) {
        dfs(index + 1, fixIndex, sum);
      } else if (index >= fixIndex && !visited[index]) {
        visited[index] = true;
        if (sum !== ``) {
          arr.push(sum);
        }
        dfs(index + 1, fixIndex, sum + s[index]);
        visited[index] = false;
      }
    };
    for (let i = 0; i < s.length; i++) {
      dfs(0, i, ``);
    }
    return arr;
  };
  const sReverse = [...s.split(``).reverse()];
  const arr = makePermutation(s);
  const copyArr = makePermutation(sReverse);

  let answer = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (arr.includes(copyArr[i])) {
      answer.push(copyArr[i].length);
    }
  }

  answer = Math.max(...answer);
  return answer;
}
//66점
function solution(s) {
  // 앞뒤가 똑같은 문자열을 팰린드롬
  // 앞 뒤가 똑같은 문자열 중 가장 긴 길이를 return 해라

  // 뒤집기 전에 만들 수 있는 모든 s의 부분 문자열을 구한다?
  // 중요한건 순서가 뒤바뀌지 않아야한다.
  // 그리고 뒤집은 배열에서 문자가 있는지 확인한다?

  // 시간초과 나지 않나
  // abcdcba : abcdcba
  // abacde : edcaba

  // 하난 뒤집고 가능한 조합을 비교

  const makePermutation = (s) => {
    const visited = Array.from({ length: s.length }, () => false);
    const arr = [];
    const dfs = (index, fixIndex, sum) => {
      if (index === s.length) {
        arr.push(sum);
        return;
      }
      if (index < fixIndex) {
        dfs(index + 1, fixIndex, sum);
      } else if (index >= fixIndex && !visited[index]) {
        visited[index] = true;
        if (sum !== ``) {
          arr.push(sum);
        }
        dfs(index + 1, fixIndex, sum + s[index]);
        visited[index] = false;
      }
    };
    for (let i = 0; i < s.length; i++) {
      dfs(0, i, ``);
    }
    return arr;
  };

  const sReverse = [...s.split(``).reverse()];
  const copyArr = makePermutation(sReverse);

  let answer = [];
  for (let i = 0; i < copyArr.length; i++) {
    if (s.includes(copyArr[i])) {
      answer.push(copyArr[i].length);
    }
  }

  answer = Math.max(...answer);

  return answer;
}

function solution(s) {
  // 그냥 s를 뒤집은 것에서 s랑 일치하는게 있다면 그냥 바로 return하면 시간초과해결

  // abacde가 있다면
  // edcaba, abacd, bacde, edca, dcab, caba 순으로 나아가는 반복문을짜면된다.

  // substr 사용하면된다.

  // 0에서 출발은 같고

  const reverseS = [...s.split(``).reverse()].join(``);

  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j < s.length; j++) {
      const sliced = reverseS.substr(j, i);
      if (s.includes(sliced)) {
        return sliced.length;
      }
      if (i + j === s.length) {
        break;
      }
    }
  }
} //80점

function solution(s) {
  // 앞뒤로 같은게있는지

  // 먼저 s의 길이부터 점점 작게 비교를 해나가자

  //몇개씩 자를 건지 먼저 7부터

  for (let i = s.length; i > 0; i--) {
    //i=> s.length만큼 자르는 거 부터 시작한다.
    for (let j = 0; j <= s.length - i; j++) {
      const sliced = s.slice(j, i + j);
      if (sliced.length === 1) {
        return 1;
      }
      let count = 0;
      for (let k = 0; k < Math.floor(sliced.length / 2); k++) {
        if (sliced[k] !== sliced[sliced.length - 1 - k]) {
          break;
        }
        count = count + 1;
        if (count === Math.floor(sliced.length / 2)) {
          return sliced.length;
        }
      }
    }
  }
}
// 100점으로 통과
