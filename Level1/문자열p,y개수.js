const s = "pPoooyY";
function solution(s) {
  const smalls = s.toLowerCase();
  const arrays = [...smalls];
  let pp = [];
  let yy = [];
  arrays.forEach(function (item) {
    if (item === "p") {
      pp.push(item);
    }
    if (item === "y") {
      yy.push(item);
    }
  });
  return pp.length === yy.length ? true : false;
}
solution(s);
//해결
