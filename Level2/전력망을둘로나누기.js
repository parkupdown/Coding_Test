function solution(n, wires) {
  let count = 0;

  const dfs = (current, visited, remove) => {
    count = count + 1;
    for (let i = 0; i < wires.length; i++) {
      if (!visited[i] && i !== remove) {
        if (current === wires[i][0]) {
          visited[i] = true;
          dfs(wires[i][1], visited, remove);
        } else if (current === wires[i][1]) {
          visited[i] = true;
          dfs(wires[i][0], visited, remove);
        }
      }
    }
  };

  let answer = [];

  for (let i = 0; i < wires.length; i++) {
    const visited = Array.from({ length: wires.length }, () => false);
    const arr = [];
    for (let j = 0; j < wires.length; j++) {
      if (i !== j && !visited[j]) {
        dfs(wires[j][0], visited, i);
        arr.push(count, n - count);
        count = 0;
        break;
      }
    }
    answer.push(Math.abs(arr[1] - arr[0]));
  }

  answer = Math.min(...answer);

  return answer;
} // 성공!

let n = 3;
let wires = [
  [1, 2],
  [2, 3],
];
function solution(n, wires) {
  let count = 0;
  if (wires.length === 2) {
    return 1;
  }

  const dfs = (current, visited, remove) => {
    count = count + 1;
    for (let i = 0; i < wires.length; i++) {
      if (!visited[i] && i !== remove) {
        if (current === wires[i][0]) {
          visited[i] = true;
          dfs(wires[i][1], visited, remove);
        } else if (current === wires[i][1]) {
          visited[i] = true;
          dfs(wires[i][0], visited, remove);
        }
      }
    }
  };

  let answer = [];

  for (let i = 0; i < wires.length; i++) {
    const visited = Array.from({ length: wires.length }, () => false);
    const arr = [];
    for (let j = 0; j < wires.length; j++) {
      if (i !== j && !visited[j]) {
        dfs(wires[j][0], visited, i);
        arr.push(count);
        count = 0;
      }
    }
    if (arr.length === 1) {
      answer.push(arr[0]);
    } else if (arr.length !== 0) {
      answer.push(Math.abs(arr[1] - arr[0]));
    }
  }

  answer = Math.min(...answer);

  return answer;
}
solution(n, wires);
/*
function solution(n, wires) {
  //current가 어디에서 시작하냐에 따라
  // 해당 wires는 없다고해버리자 그 index의 wires는
  // remove가 0 일때만 2부터시작하면될듯
  let count = 0;
  const dfs = (current, remove, visited) => {
    count = visited.filter((item) => true);
    for (let i = 0; i < wires.length; i++) {
      if (!visited[i] && i !== remove) {
        if (current === wires[i][1]) {
          visited[i] = true;
          dfs(wires[i][0], remove, visited);
        } else if (current === wires[i][0]) {
          visited[i] = true;
          dfs(wires[i][1], remove, visited);
        }
      }
    }
  };

  for (let i = 0; i < wires.length; i++) {
    // remove를 각 i 번째 index라생각하면서
    const visited = Array.from({ length: wires.length }, () => false);
    //여기서 끊어지더라도 계속 찾아야하니까
    for (let j = 0; j < wires.length; j++) {
      if (!visited[j] && i !== j) {
        visited[j] = true;
        dfs(wires[j][0], i, visited);
        console.log(count);
        count = 0;
      }
    }
  }
}
*/
