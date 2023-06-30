function solution(weights) {
  let answer = [];
  let saved = new Map();

  for (let i = 0; i < weights.length; i++) {
    let target = weights[i];
    for (let j = 0; j < 4; j++) {
      if (saved.get(target) === undefined) {
        saved.set(target, [i]);
      } else {
        saved.get(target).forEach((item) => {
          const test = `${String(item)},${String(i)}`;
          if (!answer.includes(test)) {
            answer.push(test);
          }
        });
        saved.set(target, [...saved.get(target), i]);
      }
      target = target + weights[i];
    }
  }
  return answer.length;
}
//23점 시간초과
function solution(weights) {
  let answer = 0;
  let saved = new Map();

  for (let i = 0; i < weights.length; i++) {
    let target = weights[i];
    for (let j = 0; j < 4; j++) {
      if (saved.get(target) === undefined) {
        saved.set(target, [i]);
      } else {
        saved.set(target, [...saved.get(target), i]);
      }
      target = target + weights[i];
    }
  }

  const checkCase = (num) => {
    if (num === 1) {
      return 0;
    }
    return checkCase(num - 1) + (num - 1);
  };
  saved = [...saved]
    .map((arr) => arr.filter((item, index) => index === 1))
    .map((item) => item.join(``));

  saved = saved.map((item) =>
    item
      .split(``)
      .filter((item2) => item2 !== ",")
      .join(``)
  );

  saved = [...new Set(saved)].filter((item) => item.length > 1);

  saved.forEach((item) => {
    answer = answer + checkCase(item.length);
  });
  return answer;
}
//실패

function solution(weights) {
  const saved = new Map();
  let count = 0;
  weights.sort((a, b) => a - b);
  // 오름차순으로 정렬
  const ratio = [1, 2, 4 / 3, 3 / 2];
  for (let i = 0; i < weights.length; i++) {
    if (saved.get(weights[i]) !== undefined) {
      //이미 있으면?
      // +를 해주는게맞지
      count = count + saved.get(weights[i]);
    }
    for (let j = 0; j < 4; j++) {
      if (saved.get(weights[i] * ratio[j]) === undefined) {
        saved.set(weights[i] * ratio[j], 1);
      } else {
        saved.set(weights[i] * ratio[j], saved.get(weights[i] * ratio[j]) + 1);
      }
    }
  }
  return count;
}
