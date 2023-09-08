function solution(k, dungeons) {
  // ["최소피로도","소모피로도"]
  // 최대 몇개의 던전을 들어갈 수 있느냐
  const visited = Array.from({ length: dungeons.length }, () => false);
  let answer = 0;
  const dfs = (hp, clear) => {
    if (clear > answer) {
      answer = clear;
    }
    for (let i = 0; i < dungeons.length; i++) {
      const hpLevel = dungeons[i][0];
      const hpDraw = dungeons[i][1];
      if (!visited[i] && hpLevel <= hp) {
        visited[i] = true;
        dfs(hp - hpDraw, clear + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);

  return answer;
}
