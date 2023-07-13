function solution(weights) {
  //2 ,3, 4
  // 이걸로 만들 수 있는 비율은
  // 2:3, 1:2, 1:1, 3:4

  weights.sort((a, b) => a - b);

  // 그럼 위쪽으로 향하는 경우가 다음과 같은 경우면 ?? 맞는거지?

  let answer = 0;

  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      if (
        weights[i] / weights[j] === 2 / 3 ||
        weights[i] / weights[j] === 1 / 2 ||
        weights[i] / weights[j] === 1 ||
        weights[i] / weights[j] === 3 / 4
      ) {
        answer++;
      }
    }
  }
  return answer;
}
//시간초과 50점

function solution(weights) {
  //2 ,3, 4
  // 이걸로 만들 수 있는 비율은
  // 2:3, 1:2, 1:1, 3:4

  weights.sort((a, b) => a - b);

  let answer = 0;
  // 그럼 위쪽으로 향하는 경우가 다음과 같은 경우면 ?? 맞는거지?
  const hash = new Map();
  const ratio = [3 / 2, 2, 1, 4 / 3];

  for (let i = 0; i < weights.length; i++) {
    if (hash.has(weights[i])) {
      answer = answer + hash.get(weights[i]);
    }
    for (let j = 0; j < ratio.length; j++) {
      const result = weights[i] * ratio[j];
      //이걸 곱한게 몇개있는지를보는거
      if (hash.get(result) === undefined) {
        hash.set(result, 1);
      } else {
        hash.set(result, hash.get(result) + 1);
      }
    }
  }

  return answer;
}
