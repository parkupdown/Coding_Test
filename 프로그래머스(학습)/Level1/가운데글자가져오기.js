const s = "abcdef";
function solution(s) {
  const Sarray = [...s];
  return s.length % 2 !== 0
    ? Sarray[(s.length - 1) / 2]
    : Sarray[s.length / 2 - 1] + Sarray[s.length / 2];
}
solution(s);
