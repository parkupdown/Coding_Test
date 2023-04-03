let topping = [1, 2, 1, 3, 1, 4, 1, 2];
function solution(topping) {
  const stack = [];
  let count = 0;
  while (topping.length > 0) {
    stack.push(topping.pop());
    const front = [...new Set(stack)];
    const back = [...new Set(topping)];
    front.length === back.length ? (count = count + 1) : null;
  }
  return count;
}
solution(topping);
