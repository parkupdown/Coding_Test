const n = 5;
function solution(n) {
  const arr = [0, 1];
  while (arr.length !== n + 1) {
    const Arrlength = arr.length;
    arr.push((arr[Arrlength - 1] + arr[Arrlength - 2]) % 1234567);
  }
  return arr[arr.length - 1];
}
solution(n);
