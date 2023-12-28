function solution(storey) {
  const answer = [];
  // 그냥 배열로 만들어서 하는게 더 이득일듯
  storey = String(storey)
    .split(``)
    .map((item) => parseInt(item))
    .reverse();
  // 이제 0 번 부터 쭉 더하거나 뺴서 다음거에 영향 주면서?? count세면됨

  const dfs = (sum, target, index, res) => {
    if (index === storey.length) {
      if (res === "더함") {
        answer.push(sum + 1);
      } else {
        answer.push(sum);
      }
      return;
    }

    if (target !== 0) {
      dfs(sum + 10 - target, storey[index + 1] + 1, index + 1, "더함");
      dfs(sum + target, storey[index + 1], index + 1, "뺌");
    } else if (target === 0) {
      dfs(sum + storey[index], storey[index + 1], index + 1);
    }
  };
  dfs(0, storey[0], 0);

  return Math.min(...answer);
}
// 성공

function solution(storey) {
  const answer = [];
  // 그냥 배열로 만들어서 하는게 더 이득일듯
  storey = String(storey)
    .split(``)
    .map((item) => parseInt(item))
    .reverse();
  // 이제 0 번 부터 쭉 더하거나 뺴서 다음거에 영향 주면서?? count세면됨

  const dfs = (sum, target, index) => {
    if (index === storey.length - 1) {
      answer.push(sum + target);
      return;
    }

    if (target !== 0) {
      dfs(sum + 10 - target, storey[index + 1] + 1, index + 1);
      dfs(sum + target, storey[index + 1], index + 1);
    } else if (target === 0) {
      dfs(sum + storey[index], storey[index + 1], index + 1);
    }
  };
  dfs(0, storey[0], 0);

  return Math.min(...answer);
}
solution(storey);
