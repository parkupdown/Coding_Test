let topping = [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  const stack = [];
  let toppingSliced;
  let count = 0;
  for (let i = 0; i < topping.length; i++) {
    if (!stack.includes(topping[i])) {
      stack.push(topping[i]);
    }
    toppingSliced = topping.slice(i + 1);
    toppingSliced = [...new Set(toppingSliced)];

    if (toppingSliced.length === stack.length) {
      count = count + 1;
    }
    // 만약 stack에 없는 케이크면 추가
  }
  return count;
}
solution(topping);
