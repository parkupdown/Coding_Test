let number = "1231234";
let k = 3;

function solution(number, k) {
  let target = 0;

  const dfs = (sum, recentIndex) => {
    if (sum === "0") {
      return;
    }

    if (sum.length === number.length - k) {
      if (target === 0) {
        target = sum * 1;
      }
      if (target < sum * 1) {
        target = sum * 1;
      }
      return;
    }

    for (let i = 0; i < number.length; i++) {
      if (sum.length === 0 && i > number.length - k) {
        return;
      }
      if (i > recentIndex) {
        dfs(sum + number[i], i);
      }
    }
  };

  dfs(``, -1);

  return String(target);
}
solution(number, k);
/*
function solution(number, k) {
  const visited = Array.from({ length: number.length }, () => false);
  let target;
  const dfs = (sum) => {
    if (sum.length === number.length - k) {
      if (target === undefined) {
        target = sum * 1;
      }
      if (target < sum * 1) {
        target = sum * 1;
      }
      return;
    }

    for (let i = 0; i < number.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        dfs(sum + number[i]);
        visited[i] = false;
      }
    }
  };

  dfs(``);

  return String(target);
}

solution(number, k);
*/
