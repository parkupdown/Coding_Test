const cacheSize = 5;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  let count = 0;
  let A = cities.map((item) => item.toLowerCase()); //소문자
  let B = [];
  for (i = 0; i < 123123; i++) {
    if (B.indexOf(A[i]) !== -1) {
      B.splice(B.indexOf(A[i]), 1);
      B.unshift(A[i]);
    } else {
      B.unshift(A[i]);
    }
    if (B.length === cacheSize) {
      break;
    }
  }
  //가득채워진 초기상태
  count = count + B.length * 5;
  for (i = cacheSize; i < cities.length; i++) {
    let C = B.filter((item) => item !== A[i]);
    //이게 이제 합쳐질꺼
    console.log(B);
    console.log(C);
    if (C.length === B.length) {
      count = count + 5;
      B = [A[i], ...C];
      B.pop();
    } else {
      count = count + 1;
      B = [A[i], ...C];
    }
  }
  return count;
}
solution(cacheSize, cities);
//해결
