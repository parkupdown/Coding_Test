let arr = [2, 6, 8, 14];
function solution(arr) {
  const Max = Math.max(...arr);
  let plusMax = Math.max(...arr);
  let check = [];

  const filterArr = arr.filter((item) => item !== Max);
  while (true) {
    check = filterArr.filter((item) => plusMax % item === 0);
    if (check.length === filterArr.length) {
      return plusMax;
    }
    plusMax = plusMax + Max;
  }
}

solution(arr);
