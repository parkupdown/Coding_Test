let order = [1, 2, 4, 3, 5];

function solution(order) {
  const orderLength = order.length;
  let answer = 0;
  let count = 1;
  let orderTarget = 0;
  const stack = [count];

  while (true) {
    if (order[orderTarget] === stack[stack.length - 1]) {
      orderTarget = orderTarget + 1;
      stack.pop();
      answer = answer + 1;
    } else if (order[orderTarget] !== stack[stack.length - 1]) {
      stack.push(count);
      count = count + 1;
    }
    if (count > orderLength + 1 || orderTarget === orderLength + 1) {
      return answer;
    }
  }
}
solution(order);
