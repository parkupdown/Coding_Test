let topping = [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  const stack = [];
  //indexOf로 찾기
  let count = 0;
  let kindOfTopping = [...new Set(topping)];
  let brotherHave = kindOfTopping.length;

  kindOfTopping = kindOfTopping.map((item) => topping.lastIndexOf(item));

  for (let i = 0; i < topping.length; i++) {
    if (!stack.includes(topping[i])) {
      stack.push(topping[i]);
      // 철수가 가진거
    }
    if (kindOfTopping.includes(i)) {
      brotherHave = brotherHave - 1;
    }
    //동생이 가진거 하나 뺏기

    if (stack.length === brotherHave) {
      count = count + 1;
    }

    if (stack.length > brotherHave) {
      return count;
    }
  }
  return count;
}
solution(topping);
/*
function solution(topping) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < topping.length; i++) {
    const removeTopping = topping.pop();
    if (!stack.includes(removeTopping)) {
      stack.push(removeTopping);
    }
    const toppingTwo = [...new Set(topping)];

    if (stack.length === toppingTwo.length) {
      count = count + 1;
    }
    if (stack.length > toppingTwo) {
      return count;
    }
  }
  return count;
}
*/
/*
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
*/
