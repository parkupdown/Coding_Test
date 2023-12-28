let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);

  let highScore = 0;

  const dfs = (hp, clear) => {
    if (clear > highScore) {
      highScore = clear;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i] === false && dungeons[i][0] <= hp) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], clear + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);
  return highScore;
}
solution(k, dungeons);
