const arr = [4, 3, 2, 1];
function solution(arr) {
  const removenum = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((item) => item != removenum) : [-1];
}

solution(arr);
//해결
