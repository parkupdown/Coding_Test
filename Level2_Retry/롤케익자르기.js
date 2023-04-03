let topping = [1, 2, 1, 3, 1, 4, 1, 2];
function solution(topping) {
  const stack = [];
  let count = 0;
  let you = [...new Set(topping)].length;
  let me = 0;
  while (topping.length > 0) {
    const remove = topping.pop();
    if (!stack.includes(remove)) {
      stack.push(remove);
      me = me + 1;
    }
    if (!topping.includes(remove)) {
      you = you - 1;
    }
    console.log(you, me);
    if (you === me) {
      count = count + 1;
    }
  }
  return count;
}
solution(topping);
