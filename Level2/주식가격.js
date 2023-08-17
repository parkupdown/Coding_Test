function solution(prices) {
  const stack = [];
  const pricesLen = prices.length;
  let answer = Array.from({ length: prices.length }, () => null);
  let index = 0;
  let count = 0;
  while (pricesLen > index) {
    const lastStack = stack[stack.length - 1];
    const targetPrice = prices[index];
    if (stack.length === 0) {
      stack.push(prices[index]);
      index = index + 1;
    } else if (lastStack > targetPrice) {
      answer[index - 1] = 1 + index - stack.length + count;
      stack.pop();
      count = count + 1;
    } else if (lastStack <= targetPrice) {
      stack.push(targetPrice);
      index = index + 1;
    }
  }

  answer = answer.map((item, index) => {
    if (item === null) {
      return answer.length - 1 - index;
    }
    return item;
  });

  return answer;
}
// 테스트케이스 1개통과..
let prices = [1, 2, 3, 4, 2, 1, 2, 3, 2, 2, 2, 4];

function solution(prices) {
  let answer = Array.from({ length: prices.length }, () => null);
  // 작은 수를 마주했을 때 그 밑으로 전부 검증해야한다.
  const pricesLen = prices.length;
  const stack = [];
  let index = 0;
  let count = 0;
  while (index < pricesLen) {
    if (stack.length === 0) {
      stack.push(prices[index]);
      index = index + 1;
      count = 0;
    } else if (stack[stack.length - 1] > prices[index]) {
      const lastStack = stack.length - 1;
      answer[lastStack] = index - lastStack + count;
      count++;
      stack.pop();
      //이때의 index의 값을 가져와서 answer에 넣어야함
    } else if (stack[stack.length - 1] <= prices[index]) {
      stack.push(prices[index]);
      index = index + 1;
      count = 0;
    }
  }
  answer = answer.map((item, index) => {
    if (item === null) {
      return answer.length - index - 1;
    }
    return item;
  });
  return answer;
}
solution(prices);

//
function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer.push(j - i);
        break;
      }
    }
    if (answer[i] !== undefined) {
      continue;
    }
    answer.push(prices.length - 1 - i);
  }
  answer.push(0);

  return answer;
}
// 브루스포스로 시도하니 해결됨.
