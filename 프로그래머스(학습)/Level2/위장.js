const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

//먼저 new Map을 활용하여 만들자

function saveMap(clothes) {
  const map = new Map();
  clothes.forEach((item) => {
    map.set(item[1], 0);
  });
  return map;
}

function plusMap(clothes, map) {
  clothes.forEach((item) => {
    map.set(item[1], map.get(item[1]) + 1);
  });
}

function solution(clothes) {
  let map = saveMap(clothes);
  plusMap(clothes, map);

  const clothesArr = [...map];
  let count = 1;

  clothesArr.forEach((item) => {
    count = count * (item[1] + 1);
  }); // 이 수학식을 이용해야만 답이 나오는 구조임 ;;

  return count - 1;
}
solution(clothes);
