function solution(n, stations, w) {
  let answer = [];
  let count = 1;
  let index = 0;
  for (let i = 1; i <= n; i++) {
    const leftRange = stations[index] - w - 1;
    const rightRange = stations[index] + w;
    if (i === leftRange) {
      answer.push(count);
      count = 1;
      index = index + 1;
      i = rightRange;
    } else if (i !== n && i !== leftRange) {
      count = count + 1;
    }
  }
  if (count !== 1) {
    answer.push(count);
  }
  const range = 2 * w + 1;

  answer = answer.reduce((acc, cur) => acc + Math.ceil(cur / range), 0);

  return answer;
}

function solution(n, stations, w) {
  let answer = [];
  let answers = 0;
  //중간에 얼마나 있는지를 알아보면 된다.
  stations = stations.map((item) => [item - w, item + w]);

  // 이제 이 사이에 얼마나 있는지를 알아보면됨
  let target = 1;

  for (let i = 0; i < stations.length; i++) {
    answer.push(stations[i][0] - target);
    target = stations[i][1] + 1;
  }
  if (n > stations[stations.length - 1][1]) {
    answer.push(n - target + 1);
  }
  const range = w * 2 + 1;

  answer = answer.filter((item) => item > 0);

  answer.forEach((item) => (answers = answers + Math.ceil(item / range)));

  return answers;
}

function solution(n, stations, w) {
  //O(N)으로 문제를 해결해야함
  stations.unshift(-w);
  if (stations[stations.length - 1] !== n) {
    stations.push(n + w + 1);
  }
  const range = 2 * w + 1;
  let answer = 0;
  for (let i = 0; i < stations.length - 1; i++) {
    const left = stations[i] + w + 1;
    const right = stations[i + 1] - w;

    const plus = Math.ceil((right - left) / range);
    answer = answer + plus;
  }

  return answer;
}
