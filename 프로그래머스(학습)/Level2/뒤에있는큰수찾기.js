function solution(numbers) {
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    //안바뀐 stack
    stack.push(i);
    // 무조건 stack에들어가게됨
    // 아직 비교대상이 안왓으니까
    // 이전의 stack을 이제 검사해서 더 큰게있다면 바꿔주기

    // [0,1,2]
    // 빼버리면 count안하면되네
    let count = 0;
    while (count < stack.length) {
      const index = stack[count];
      if (numbers[index] < numbers[i]) {
        numbers[index] = numbers[i];
        stack.splice(count, 1);
      } else {
        count = count + 1;
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    const index = stack[i];
    numbers[index] = -1;
  }
  return numbers;
  // 똑같으면 -1
}
// stack으로 구현했지만 타임오버

function solution(numbers) {
  // 마지막것만 비교하면됨
  const result = new Array(numbers.length).fill(-1);
  const stack = [];
  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
// stack은 pop, shift를 항상 고려해야 최선의 답이나옴
