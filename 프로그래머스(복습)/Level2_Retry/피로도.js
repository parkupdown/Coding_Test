let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

function solution(k, dungeons) {
  let count = 1;

  while (dungeons.length > 0) {
    dungeons = dungeons
      .filter((item) => item[0] <= k)
      .sort((a, b) => a[1] - b[1]);

    k = k - dungeons[0][1];

    dungeons.shift();
    count = count + 1;
  }
  return count;
}
solution(k, dungeons);
