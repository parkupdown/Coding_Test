const s = "cdcd";

function solution(s) {
  const Arr = s.split(``);
  const check = [];
  for (let i = 0; i < Arr.length; i++) {
    if (check[check.length - 1] === Arr[i]) {
      check.pop();
    } else {
      check.push(Arr[i]);
    }
  }

  if (check.length === 0) {
    return 1;
  }
  return 0;
}
solution(s);
