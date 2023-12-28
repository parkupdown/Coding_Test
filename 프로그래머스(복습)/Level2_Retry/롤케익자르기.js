let topping = [1, 2, 3, 1, 4];
function solution(topping) {
  const stack = [];
  let count = 0;
  let you = [...new Set(topping)].length;
  let me = 0;
  while (true) {
    const remove = topping.pop();
    if (!stack.includes(remove)) {
      stack.push(remove);
      me++;
    }
    if (!topping.includes(remove)) {
      you++;
    }
    if (you === me) {
      count++;
    }
    if (you < me) {
      return count;
    }
  }
}
solution(topping);
