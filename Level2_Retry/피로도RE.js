let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

function solution(k, dungeons) {
  const visited = Array.from({ length: dungeons.length }, () => false);
  let answer = [];
  const dfs = (hp, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    console.log(count);
    answer.push(count);
  };

  dfs(k, 0);

  answer = Math.max(...answer);

  return answer;
}
solution(k, dungeons);
