function solution(sequence) {
  const sum1 = sequence.map((item, index) =>
    index % 2 === 0 ? item : item * -1
  );
  const sum2 = sequence.map((item, index) =>
    index % 2 === 1 ? item : item * -1
  );
  const Length = sequence.length;
  let answer1 = 0;
  let answer2 = 0;
  let stack1 = 0;
  let stack2 = 0;
  for (let i = 0; i < Length; i++) {
    stack1 = stack1 + sum1[i];
    if (stack1 < sum1[i]) {
      //이게 더 커버리면 stack1 = sum1[i]
      stack1 = sum1[i];
    }
    if (answer1 < stack1) {
      answer1 = stack1;
    }
  }

  for (let i = 0; i < Length; i++) {
    stack2 = stack2 + sum2[i];
    if (stack2 < sum2[i]) {
      //이게 더 커버리면 stack1 = sum1[i]
      stack2 = sum2[i];
    }
    //여기는 이제 현재까지의 stack, 즉 누적합의 최대값이 들어있음
    if (answer2 < stack2) {
      answer2 = stack2;
    }
  }
  return Math.max(answer1, answer2);
}
// 테스트 통과

function solution(sequence) {
  // 1또는 -1로 시작하면서 1과-1이 번갈아 나오는 수열의 가장 큰수

  // 연속해서 가장 큰 수

  // 그냥 곱하지 않아도 + - +를 나 - + - 를했을때 가장 큰 수

  // 동일한게 나오면 그 전까지가 최대값이 되는거

  // 첫번째부터 시작해서 계속 끊게 되겠네

  // 다시 거기서부터 시작하고 이런식으로
  let answer = 0;
  let start = 1;
  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    //처음엔 + 부터시작
    if (sequence[i] * start >= 0) {
      sum = sum + Math.abs(sequence[i]);
    } else if (sequence[i] * start < 0) {
      //여기는 이제 규칙성에서 벗어난것
      if (answer < sum) {
        answer = sum;
      }
    }
    start = start * -1;
  }
  start = -1;
  sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] * start >= 0) {
      sum = sum + Math.abs(sequence[i]);
    } else if (sequence[i] * start < 0) {
      //여기는 이제 규칙성에서 벗어난것
      if (answer < sum) {
        answer = sum;
      }
    }
    start = start * -1;
  }

  return answer;
}

function solution(sequence) {
  // 대신 -가 있더라도 제일 큰수가 나올 수 있으니까
  // 연속했을 때 제일 큰 수를 찾으면 된다.
  // 핵심은 연속
  let answer = 0;

  const arr1 = Array.from({ length: sequence.length }, (_, i) =>
    i % 2 === 0 ? 1 : -1
  );

  const copy1 = sequence.map((item, index) => item * arr1[index]);

  // 이제 결국 연속하는 수중 뭐가 가장 크냐의 문제로 귀결됨

  // 그냥 쭉 더하고 빼면서 최대인 부분?

  for (let i = 0; i < copy1.length; i++) {
    for (let j = 0; j <= i; j++) {
      const sum1 = copy1.slice(j, i + 1).reduce((acc, cur) => acc + cur, 0);
      if (Math.abs(sum1) > answer) {
        answer = Math.abs(sum1);
      }
    }
  }

  return answer;
}

function solution(sequence) {
  // 연속 펄스 부분 수열의 합

  // 아 1 -1 1 -1 이나 -1 1 -1 1을 곱해서 최대가 되는 수열의 합

  // 부호만 바뀌게 되는건데

  // 근데 완탐으로 하면 시간이 너무 오래걸릴거 같은데
  let answer = 0;
  for (let i = 0; i < sequence.length; i++) {
    // slice = > (0,2)이면 0,1까지 잘리는거
    for (let j = 1; j <= sequence.length - i; j++) {
      // 여기서 자름
      const sliced = sequence.slice(i, i + j);

      const sum1 = sliced.reduce(
        (acc, cur, index) => (index % 2 === 1 ? acc + cur : acc + cur * -1),
        0
      );
      const sum2 = sliced.reduce(
        (acc, cur, index) => (index % 2 === 0 ? acc + cur : acc + cur * -1),
        0
      );

      if (answer < sum1) {
        answer = sum1;
      }
      if (answer < sum2) {
        answer = sum2;
      }
    }
  }
  return answer;
}
// 효율성테스트 0점
