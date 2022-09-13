const n = 12345;
//정렬을 큰 순서대로
function solution(n) {
  const y = [...String(n)];
  let numarray = y.map((item) => item * 1); // return [1,2,3,4,5]
  return numarray.reverse();
}
solution(n);
/*  let numarray = y.map((item) => item * 1).sort((a, b) => b - a);
이렇게하면 큰 순서대로 되는것임 */
