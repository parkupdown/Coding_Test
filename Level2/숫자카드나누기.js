function solution(arrayA, arrayB) {
  //가장 작은 수 찾기
  let answer = [];

  const Am = Math.min(...arrayA);
  const Bm = Math.min(...arrayB);

  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (num / i != i) divisors.push(num / i);
      }
    }
    return divisors;
  };
  const A = getDivisors(Am)
    .sort((a, b) => b - a)
    .filter((item) => item !== 1);
  const B = getDivisors(Bm)
    .sort((a, b) => b - a)
    .filter((item) => item !== 1);

  //A를 기준으로 먼저 나누어보자

  const canDivide = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % num !== 0) {
        return false;
      }
    }
    return true;
  };
  const cantDivide = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % num === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < A.length; i++) {
    if (canDivide(A[i], arrayA) && cantDivide(A[i], arrayB)) {
      answer.push(A[i]);
      break;
    }
  }
  for (let j = 0; j < B.length; j++) {
    if (canDivide(B[j], arrayA) && cantDivide(B[j], arrayB)) answer.push(B[j]);
    break;
  }

  if (answer.length === 0) {
    return 0;
  }
  answer = Math.max(...answer);

  return answer;
}
//41.7점

function solution(arrayA, arrayB) {
  // a는 2가지 경우
  // 1. 철수껀 다 나누고 영희껀 하나도 못나눔
  // 2. 영희껀 다 나누고 철수껀 하나도 못나눔

  // 가장 큰 양의 정수 a를 구하여라

  // 일단은 A든 B든 모두 나눌 수 있는 최대의 수를 구하는게 먼저네

  // 먼저 약수를 어떻게 효율적으로 구할 수 있을지

  // 일단 가장 큰 수를 나눌 수 있어야 하니까

  // 걍 가장 큰 수를 기준으로 약수를 구해서 해당 약수 먼저 구해보자

  const maxA = Math.max(...arrayA);
  const maxB = Math.max(...arrayB);
  const A = [];
  const B = [];
  for (let i = 2; i < Math.sqrt(maxA); i++) {
    if (maxA % i === 0) {
      A.push(i, maxA / i);
    }
  }
  for (let j = 2; j < Math.sqrt(maxB); j++) {
    if (maxB % j === 0) {
      B.push(j, maxB / j);
    }
  }

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  // 이건 그냥 모든 약수들을 담아 놓은것

  // 이중포문을 2번
  const answer = [];
  const check = (AB, first, second) => {
    for (let i = 0; i < AB.length; i++) {
      let count = 0;
      for (let j = 0; j < arrayA.length; j++) {
        if (first[j] % AB[i] === 0 && second[j] % AB[i] !== 0) {
          count = count + 1;
        }
      }
      if (count === arrayA.length) {
        answer.push(AB[i]);
        return;
      }
    }
  };

  check(A, arrayA, arrayB);
  check(B, arrayB, arrayA);

  return answer.length === 0 ? 0 : Math.max(...answer);
}
//77.8점
