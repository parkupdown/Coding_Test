const k = 80;
const dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
function solution(k, dungeons) {
  const Pass = [];

  //k가 가능한지를 먼자 찾자
  while (Pass.length < 3) {
    const canSolveDG = dungeons
      .map((dungeon) => {
        if (dungeon[0] <= k) {
          return dungeon;
        }
      })
      .sort((a, b) => a[1] - b[1]);




  }
}
