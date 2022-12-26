const s = "3234";

function solution(s) {
  if (/^[0-9]*$/g.test(s) === false) {
    return false;
  }
  if (s.length === 4 || s.length === 6) {
    return true;
  }
  return false;
}
solution(s);
