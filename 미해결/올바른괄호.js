const s = "()()";

function solution(s) {
  const sArr = s.split(``);
  const check = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "(") {
      check.push(1);
    } else {
      if (check.length === 0) {
        return false;
      }
      check.pop();
    }
  }

  if (check.length === 0) {
    return true;
  }

  return false;
}
solution(s);
