const n = 2;
const t = 4;
const M = 2;
const p = 1;

function solution(n, t, M, p) {
  let target = "";
  let keepGoing = true;
  while (keepGoing) {
    for (let i = 0; i < 123123; i++) {
      target = target + String(i.toString(n));
      if (target.length >= M * t) {
        keepGoing = false;
        break;
      }
    }
  }
  target = target
    .slice(0, M * t)
    .split(``)
    .map((item) => item.toUpperCase())
    .filter((item, index) => index % M === p - 1)
    .join(``);
  return target;
}
solution(n, t, M, p);
