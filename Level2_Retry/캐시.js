let cacheSize = 5;
let cities = ["A", "B", "C", "B"];

function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  let checkArr = [];
  let count = 0;

  cities = cities.map((item) => item.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    if (checkArr.length < cacheSize && checkArr.includes(cities[i]) === false) {
      checkArr.unshift(cities[i]);
      count = count + 5;
      continue;
    }

    if (checkArr.includes(cities[i])) {
      count = count + 1;
      checkArr = checkArr.filter((item) => item !== cities[i]);
      checkArr.unshift(cities[i]);
      continue;
    }
    count = count + 5;
    checkArr.pop();
    checkArr.unshift(cities[i]);
  }

  return count;
}
solution(cacheSize, cities);
