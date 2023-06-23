function solution(n, stations, w) {
  let arr = [];
  let index = 0;
  let answer = 0;
  let current = 0;
  if (stations[0] === 1) {
    current = 1 + w;
    index = index + 1;
  }

  const lastIndex = stations.length - 1;

  while (true) {
    if (index === stations.length) {
      // 이때 n과 stations의 lastIndex의 관계에 따라 값이 달라진다.
      if (stations[lastIndex] !== n) {
        arr.push(n - current);
      }
      break;
    }

    arr.push(stations[index] - w - current - 1);
    current = stations[index] + w;
    index = index + 1;
  }

  arr = arr.filter((item) => item > 0);

  const range = 2 * w + 1;

  arr.forEach((item) => (answer = answer + Math.ceil(item / range)));

  return answer;
}

/* function solution(n, stations, w) {
  //0에서 stations의 위치와 각 stations간의 거리를 비교하면서 나아가면 될듯
  let index = 0;
  let range = 1;
  let answer = 0;

  while (index < stations.length) {
    let distance = stations[index] - range;
    console.log(distance);
    if (Math.floor(distance / (2 * w + 1)) !== 0) {
      // 커버가 안되는 지역
      if (distance % (2 * w + 1) !== 0) {
        answer = answer + Math.floor(distance / (2 * w + 1)) + 1;
      }
      if (distance % (2 * w + 1) === 0) {
        answer = answer + distance / (2 * w + 1);
      }
      range = stations[index] + w;
      index = index + 1;
    }
  }
  return answer;
}

solution(n, stations, w);

function solution(n, stations, w) {
  let currentG = 2 * w + 1;
  let index = 0;
  let answer = 0;
  stations.push(n);

  while (currentG <= n) {
    if (stations[index] > currentG) {
      currentG = currentG + (2 * w + 1);
      answer = answer + 1;
    } else if (stations[index] <= currentG) {
      currentG = stations[index];
      index = index + 1;
    }
  }

  return answer;
}

function solution(n, stations, w) {
  let arr = [];
  let index = 0;
  let answer = 0;
  let current = 1;

  while (true) {
    if (index === stations.length) {
      arr.push(n - current);
      break;
    }
    arr.push(stations[index] - w - current);
    current = stations[index] + w;
    index = index + 1;
  }

  arr = arr.filter((item) => item > 0);

  const range = 2 * w + 1;

  arr.forEach((item) => (answer = answer + Math.ceil(item / range)));

  return answer;
}

let n = 11;
let stations = [1, 4];
let w = 1;

function solution(n, stations, w) {
  let arr = [];
  let index = 0;
  let answer = 0;
  let current = 1;
  if (stations[0] === 1) {
    current = 1 + w;
    index = index + 1;
  }

  const lastIndex = stations.length - 1;

  while (true) {
    if (index === stations.length) {
      // 이때 n과 stations의 lastIndex의 관계에 따라 값이 달라진다.
      if (stations[lastIndex] !== n) {
        arr.push(n - current);
      }
      console.log(arr);
      break;
    }
    arr.push(stations[index] - w - current);
    current = stations[index] + w;

    index = index + 1;
  }

  arr = arr.filter((item) => item > 0);

  const range = 2 * w + 1;

  arr.forEach((item) => (answer = answer + Math.ceil(item / range)));

  return answer;
}
solution(n, stations, w);

*/
