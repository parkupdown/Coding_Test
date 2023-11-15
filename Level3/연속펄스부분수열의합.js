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
