const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function solution(clothes) {
  const stack = [];
  const arr = [];

  for (let i = 0; i < clothes.length; i++) {
    if (!stack.includes(clothes[i][1])) {
      const number = clothes.filter((item) => item[1] === clothes[i][1]).length;
      arr.push(number);
      stack.push(clothes[i][1]);
    }
  }
  let sum = 1;

  arr.forEach((item) => {
    sum = sum * (item + 1);
  });

  return sum - 1;
}
solution(clothes);

function solution(clothes) {
  // 의상 종류별로 가능한 경우

  let hash = new Map();

  for (let i = 0; i < clothes.length; i++) {
    hash.get(clothes[i][1]) === undefined
      ? hash.set(clothes[i][1], 2)
      : hash.set(clothes[i][1], hash.get(clothes[i][1]) + 1);
    //만약 해당 옷 종류가 없다면? 종류 추가
    //만약 해당 옷 종류가 있다면? 종류에 가지수 추가
  }

  hash = [...hash];

  const kindOfHash = hash.length;
  if (kindOfHash === 0) {
    return hash[0][1] - 1;
  }

  const answer = hash.map((item) => item[1]).reduce((acc, cur) => acc * cur);
  return answer - 1;
}
