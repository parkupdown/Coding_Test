function solution(k, d) {
  const makeSqrt = (a, b) => {
    return a * a + b * b;
  };

  const dd = d * d;

  let answer;

  const dfs = (UD, RL, count) => {
    const result = makeSqrt(UD, RL);

    if (UD > d) {
      answer = count;
      return;
    }

    if (result > dd || RL > d) {
      dfs(UD + k, 0, count);
    } else if (result <= dd) {
      dfs(UD, RL + k, count + 1);
    }
  };

  dfs(0, 0, 0);
  return answer;
}

function solution(k, d) {
  // 원점으로부터 x축 방향으로 a*k, y축방향으로 b*k 만큼 떨어진 위치에 점을 찍는다.

  // 원점과 거리가 d를 넘는 위치에는 점을 찍지 않는다.

  // 점찍기 최대 x, y 5씩인데 결국 같은거 제외하고 2배하면된다.

  // x를 기준으로 찾아나선다음 같을 걸 제외하고 2배하면됨

  // k가 3이고 d가10이면

  //0 ,3 ,9 가 최대

  // 0 일때 0 , 3 , 9 하면서

  // 3 일때 0, 3, 9

  let sameCount = 0;
  let count = 0;
  for (let i = 0; i * k <= d; i++) {
    for (let j = 0; j * k <= d; j++) {
      const x = i * k;
      const y = j * k;
      const sum = Math.sqrt(x * x + y * y);
      if (sum <= d) {
        count++;
        if (i === j) {
          sameCount++;
        }
      } else if (sum > d) {
        break;
      }
    }
  }

  return count;
}
// 브루트포스 81점
