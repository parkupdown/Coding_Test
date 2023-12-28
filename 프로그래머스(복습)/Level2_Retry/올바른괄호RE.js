function solution(s) {
  const stack = [];
  s = s.split(``);
  //배열로변환
  s.forEach((item) => {
    const lastStack = stack[stack.length - 1];
    if (lastStack === "(" && item === ")") {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return stack.length === 0 ? true : false;
}
