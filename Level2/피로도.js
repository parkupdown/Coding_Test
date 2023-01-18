const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

function solution(k, dungeons) {
  let target = k;
  let minNum = 1000;
  for (let i = 0; i < dungeons.length; i++) {
    const filtered = dungeons.filter((item) => item <= target);

    filtered.forEach((item,index) => {
if(item[1])

    });
  }
}
