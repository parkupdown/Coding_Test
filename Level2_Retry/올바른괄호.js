const s = "(())()";

function solution(s) {
  const check = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      check.push(0);
    }
    if (s.charAt(i) === ")") {
      if (check.length === 0) {
        return false;
      }
      check.pop();
    }
  }
  if (check.length > 0) {
    return false;
  }
  return true;
}
