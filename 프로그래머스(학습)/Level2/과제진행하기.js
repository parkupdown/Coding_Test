function solution(plans) {
  //과제는 시작하기로 한 시각이되면
  // 진행중이던 과제를 멈추고 새로운 과제
  // 멈춰둔 과제가 있다면 멈춘 과제를 이어서
  // 과제를 끝낸 시점에서 새로 시작해야하는과제, 멈춘과제가 있다면
  // 새로 시작해야하는 과제를 먼저수행
  // 멈춘과제가 여러개이면 최근 멈춘과제부터
  // 과제 시작시각은 모두 다름
  // 가장 최근에 멈춘것부터 함

  //1. 시간을 정렬한다. (시간을 분으로 치환)
  //2. 맨 앞의 시간을 더해보고 이보다 큰 분들을 찾아 지나간 시간만큼 - 한다.
  //3. 맨앞은 0 되어 빠지고 음수가 돼도 빠진다

  const timeChange = (time) => {
    const changed = time
      .split(":")
      .map((item, index) => (index === 0 ? item * 60 : item * 1))
      .reduce((acc, cur) => acc + cur);
    return changed;
  };

  plans = plans.map((arr) =>
    arr.map((item, index) => (index === 1 ? timeChange(item) : item))
  );

  plans.sort((a, b) => a[1] - b[1]);

  let index = 0;
  while (true) {
    const gap = plans[index + 1][1] - plans[index][1];
    const playtime = (plans[index] = 2);

    if (gap > playtime) {
      //해당 과제는 끝난거
      plans.splice(index, 1);
    } else if (gap < playtime) {
      if (index !== 0) {
        index = index - 1;
      } else {
        index = index + 1;
      }
    } else if (gap === playtime) {
      index = index + 1;
    }
  }
}

function solution(plans) {
  const timeChange = (time) => {
    const changed = time
      .split(":")
      .map((item, index) => (index === 0 ? item * 60 : item * 1))
      .reduce((acc, cur) => acc + cur);
    return changed;
  };

  plans = plans.map((arr) =>
    arr.map((item, index) => (index === 1 ? timeChange(item) : item))
  );

  plans.sort((a, b) => a[1] - b[1]);

  let index = 0;
  const answer = [];
  while (plans.length > 1) {
    if (index < 0) {
      index = 0;
    }
    const gap = plans[index + 1][1] - plans[index][1];
    const playtime = plans[index][2];
    if (gap > playtime) {
      // 종료되어야함
      answer.push(plans[index][0]);
      plans.splice(index, 1);
      plans[index][1] = plans[index][1] - playtime;
      index = index - 1;
    } else if (gap < playtime) {
      plans[index][2] = plans[index][2] - gap;
      index = index - 1;
    } else if (gap === playtime) {
      answer.push(plans[index][0]);
      plans.splice(index, 1);
    }
  }
  return answer;
}

function solution(plans) {
  // 시작순서대로 진행
  // 그냥 plans 에서 다음 과제를 수행할 때
  // 간격(gap)보다 과제하는데 걸리는 시간(playtime)이 더 짧으면?
  // 해당 과제는 해결이된거!
  // 간격(gap)보다 과제하는데 걸리는 시간(playtime)이 더 길면?
  // 일단 그 과제는 keep되는거다.
  // 결국 순서니까 잘생각해보자 굳이 다 연산하지 않아도 될수도 있다.
  //stack에 들어간다면 일단 stack내부에서는 그 순서로 들어갈거다.
  // 그리고 stack에서 몇개나 처리가 되는지가 관건이네 그럼?
  // 즉 과제를 해결하고 나서 시간이 얼마나 남았는냐에 따라 다른것!
  // gap과 playtime에 따라 액션이 달라진다.

  const timeChange = (time) => {
    const [h, m] = time.split(`:`);
    return h * 60 + m * 1;
  };

  plans = plans.map((arr) =>
    arr.map((item, index) => (index === 1 ? timeChange(item) : item))
  );

  plans.sort((a, b) => a[1] - b[1]);

  // gap이 playtime보다 크다면?
  // 과제해결
  // gap이 playtime보다 작다면?
  // 다음과제로(stack있다면 ,stack먼저보기)
  // gap이 playtime과 같다면?
  // 다음과제로(stack보지 말고 다음걸로 만약 다음 과제가 없다면? 그냥 stack을 거꾸로 넣은 뒤 return)
  const answer = [];
  const stack = [];
  while (plans.length > 1) {
    const gap = plans[1][1] - plans[0][1];
    const playtime = plans[0][2];

    if (gap > playtime) {
      //과제해결
      plans[1][1] = plans[1][1] - playtime;
      answer.push(plans.shift());
      //여기서 stack으로 가야지 만약 stack이 없지않다면
      if (stack.length !== 0) {
        //stack의 최근 거가 plans로 들어오면 좋겠는데
        plans.unshift(stack[stack.length - 1]);
      }
    } else if (gap < playtime) {
      // 과제 중단
      plans[0][2] = plans[0][2] - gap;
      stack.push(plans.shift());
    } else if (gap === playtime) {
      answer.push(plans.shift());
    }
  }
}
