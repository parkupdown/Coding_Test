const n = 8;
const m = 2;
let section = [2, 6];
function solution(n, m, section) {
  let count = 0;

  while (section.length > 0) {
    let complited = section[0] + m - 1;
    section = section.filter((item) => item > complited);
    count++;
  }
  return n === 1 ? 1 : count;
}
solution(n, m, section);
