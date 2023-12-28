function solution(k, dungeons) {
  //k 만큼의 체력이있고
  // 1을먼저가나 2를먼저가나 3을먼저가나의 순서 결국 완전탐색
  //count도 필요하네

  // [0]보다 크고 방문하지 않았다면 방문하기
  const visited = Array.from({ length: dungeons.length }, () => false);
  let answer = 0;

  const dfs = (hp, count) => {
    if (answer < count) {
      answer = count;
    }
    for (let i = 0; i < dungeons.length; i++) {
      const min = dungeons[i][0];
      const attack = dungeons[i][1];
      if (hp >= min && !visited[i]) {
        //최소 피로도 조건에 해당하고 아직 방문하지 않았다면
        visited[i] = true;
        dfs(hp - attack, count + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);

  return answer;
}
