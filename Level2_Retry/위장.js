//10시 20분
const clothes = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];

function solution(clothes) {
  //new Map으로 풀자
  const Box = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (Box.get(clothes[i][1]) === undefined) {
      Box.set(clothes[i][1], 1);
      continue;
    }
    Box.set(clothes[i][1], Box.get(clothes[i][1]) + 1);
  }
  const BoxArr = [...Box];

  let answer = 1;
  BoxArr.forEach((item) => {
    answer = answer * (item[1] + 1);
  });

  return answer - 1;
}
solution(clothes);
