let input_string = "zbzbz";
function solution(input_string) {
  const stack = [];
  let answer = [];
  for (let i = 0; i < input_string.length; i++) {
    if (
      stack.includes(input_string[i]) &&
      stack[stack.length - 1] !== input_string[i] &&
      !answer.includes(input_string[i])
    ) {
      answer.push(input_string[i]);
    }
    if (stack[stack.length - 1] !== input_string[i]) {
      stack.push(input_string[i]);
    }
  }
  return answer.length === 0 ? "N" : answer.sort().join(``);
}
solution(input_string);
