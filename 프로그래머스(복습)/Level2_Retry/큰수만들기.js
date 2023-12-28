let number = "4177252841";
let K = 4;

function solution(number, K) {
  const numLength = number.length;
  const first = number.slice(0, number.length - K).split(``);
  const Max = String(Math.max(...first));
  const MaxIndex = number.split(``).indexOf(Max);
  let numberArr = number.split(``);
  numberArr = numberArr.splice(MaxIndex);
  number = numberArr.join(``);

  let stack = [Max];
  let answer = ``;

  for (let i = 1; i < number.length; i++) {
    const lastIndex = stack.length - 1;
    if (stack.length + number.length - i === numLength - K) {
      const lastnumber = number.substr(i);
      console.log(lastnumber);
      answer = [...stack, lastnumber];
      return answer.join(``);
    }
    if (stack[lastIndex] < number[i]) {
      stack.pop();
      stack.push(number[i]);
      continue;
    }
    stack.push(number[i]);
  }

  return stack.join(``);
}
solution(number, K);
