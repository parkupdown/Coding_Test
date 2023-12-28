let s = "[](){}";

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const stack = [];

    const first = s.slice(0, 1);
    const last = s.slice(1);
    s = last + first;
    for (let j = 0; j < s.length; j++) {
      if (
        (stack[stack.length - 1] === "[" && s[j] === "]") ||
        (stack[stack.length - 1] === "{" && s[j] === "}") ||
        (stack[stack.length - 1] === "(" && s[j] === ")")
      ) {
        stack.pop();
        continue;
      }
      stack.push(s[j]);
    }
    if (stack.length === 0) {
      count = count + 1;
    }
  }
  return count;
}
solution(s);
