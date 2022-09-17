//대문자는 소문자보다 작은것으로간주
const s = "Zbfsgcdefga";
function solution(s) {
  return [...s].sort().reverse().join("");
}
solution(s);
