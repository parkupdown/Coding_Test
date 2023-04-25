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
