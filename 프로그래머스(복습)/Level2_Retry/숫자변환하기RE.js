let x = 10;
let y = 40;
let n = 30;

function solution(x, y, n) {
  let target;
  const dfs = (Y, count) => {
    if (!Number.isInteger(Y)) {
      return;
    }
    if (target !== undefined && count > target) {
      return;
    }
    if (Y <= x) {
      if (Y === x && target === undefined) {
        target = count;
      }
      if (Y === x && target > count) {
        target = count;
      }
      return;
    }

    dfs(Y / 3, count + 1);
    dfs(Y / 2, count + 1);
    dfs(Y - n, count + 1);
  };

  dfs(y, 0);

  return target === undefined ? -1 : target;
}
solution(x, y, n);

/*

function solution(x, y, n) {
  let target;
  const dfs = (X, count) => {
    if (target !== undefined && count > target) {
      return;
    }
    // count를 넘어서버리면 계산 더이상하지않고 Return함
    if (X >= y) {
      if (X === y && target === undefined) {
        target = count;
      }
      if (X === y && count < target) {
        target = count;
      }
      return;
    }
    dfs(X * 3, count + 1);
    dfs(X * 2, count + 1);
    dfs(X + n, count + 1);
  };

  dfs(x, 0);

  return target === undefined ? -1 : target;
}
solution(x, y, n);
*/
/*
function solution(x, y, n) {
  let target;
  const dfs = (X, count) => {
    if (target !== undefined && count > target) {
      return;
    }
    if (X >= y) {
      if (X === y && target === undefined) {
        target = count;
      }
      if (X === y && count < target) {
        target = count;
      }
      return;
    }

    if (X !== x) {
      if (X % 3 === 0) {
        dfs(X * 3, count + 1);
      }
      if (X % 2 === 0) {
        dfs(X * 2, count + 1);
      } else {
        dfs(X + n, count + 1);
      }
    }
    if (X === x) {
      dfs(X * 3, count + 1);
      dfs(X * 2, count + 1);
      dfs(X + n, count + 1);
    }
  };
  dfs(x, 0);

  return target === undefined ? -1 : target;
}
solution(x, y, n);
*/
