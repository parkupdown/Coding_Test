function solution(sticker) {
  // sticker는 뜯게 되면 3개씩 못쓰게되는거

  // 완전탐색으로 풀고싶다. (dfs 이용)

  // dfs로 풀꺼면 탈출조건을 잘 설정해야함

  const visited = Array.from({ length: sticker.length }, () => false);
  const answer = [];
  const dfs = (sum) => {
    for (let i = 0; i < sticker.length; i++) {
      if (!visited[i]) {
        //아직 떼지않은 스티커라면
        if (i === 0) {
          visited[i] = true;
          visited[i + 1] = true;
          visited[sticker.length - 1] = true;
        } else if (i === sticker.length - 1) {
          visited[i] = true;
          visited[0] = true;
          visited[i - 1] = true;
        } else {
          visited[i] = true;
          visited[i - 1] = true;
          visited[i + 1] = true;
        }
        if (!visited.includes(false)) {
          answer.push(sum + sticker[i]);
          //return해버리고 answer에추가
          if (i === 0) {
            visited[i] = false;
            visited[i + 1] = false;
            visited[sticker.length - 1] = false;
          } else if (i === sticker.length - 1) {
            visited[i] = false;
            visited[0] = false;
            visited[i - 1] = false;
          } else {
            visited[i] = false;
            visited[i - 1] = false;
            visited[i + 1] = false;
          }
          return;
        }

        dfs(sum + sticker[i]);
      }
    }
    dfs(0);
    console.log(answer);
  };
}
