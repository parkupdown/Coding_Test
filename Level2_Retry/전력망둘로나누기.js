function solution(n, wires) {
  let visited = Array.from({ length: wires.length }, () => false);
  let count = 1;
  const dfs = (current, j) => {
    for (let i = 0; i < wires.length; i++) {
      if (
        !visited[i] &&
        i !== j &&
        (current.includes(wires[i][0]) || current.includes(wires[i][1]))
      ) {
        visited[i] = true;
        count = count + 1;
        dfs(wires[i], j);
      }
    }
  };
  const answer = [];
  for (let i = 0; i < wires.length; i++) {
    for (let j = 0; j < wires.length; j++) {
      if (!visited[j]) {
        visited[j] = true;
        dfs(wires[j]);
        answer.push([count, n - count]);
        break;
      }
    }
    visited = Array.from({ length: wires.length }, () => false);
    count = 1;
  }

  return answer;
}

function solution(n, wires) {
  let visited = Array.from({ length: wires.length }, () => false);
  let count = 0;
  const dfs = (current, index) => {
    count = count + 1;
    for (let i = 0; i < wires.length; i++) {
      if (
        !visited[i] &&
        i !== index &&
        (current.includes(wires[i][0]) || current.includes(wires[i][1]))
      ) {
        visited[i] = true;
        dfs(wires[i], index);
      }
    }
  };
  const answer = [];
  for (let i = 0; i < wires.length; i++) {
    for (let j = 0; j < wires.length; j++) {
      visited[j] = true;
      dfs(wires[j], i);
      answer.push([count, n - count]);
      break;
    }
    visited = Array.from({ length: wires.length }, () => false);
    count = 1;
  }

  answer.sort((a, b) => Math.abs(a[1] - a[0]) - Math.abs(b[1] - b[0]));

  return Math.abs(answer[0][1] - answer[0][0]);
} //DFS로해결

function solution(n, wires) {
  // BFS로 해결해보기
  // queue가 일단 매개변수로 받아서 매번 다르고
  // visited를 잘 처리해주면 될듯
  let count = 0;

  const bfs = (start, visited, index) => {
    const queue = [start];

    while (queue.length > 0) {
      count = count + 1;
      for (let i = 0; i < queue.length; i++) {
        const [current] = queue.shift();
        for (let j = 0; j < wires.length; j++) {
          if (
            !visited[j] &&
            j !== index &&
            (current.includes(wires[j][0]) || current.includes(wires[j][1]))
          ) {
            visited[j] = true;
            queue.push(wires[j]);
          }
        }
      }
    }
  };

  for (let i = 0; i < wires.length; i++) {
    const visited = Array.from({ length: wires.length }, () => false);
    let count = 0;
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        bfs(wires[j], visited, i);
        console.log([n, count]);
        count = 0;
        break;
      }
    }
  }
}

function solution(n, wires) {
  // BFS로 해결해보기
  // queue가 일단 매개변수로 받아서 매번 다르고
  // visited를 잘 처리해주면 될듯
  let count = 0;

  const bfs = (start, visited, index) => {
    const queue = [start];

    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        const current = queue.shift();
        count = count + 1;
        for (let j = 0; j < wires.length; j++) {
          if (
            !visited[j] &&
            j !== index &&
            (current.includes(wires[j][0]) || current.includes(wires[j][1]))
          ) {
            visited[j] = true;
            queue.push(wires[j]);
          }
        }
      }
    }
  };

  let answer = [];

  for (let i = 0; i < wires.length; i++) {
    const visited = Array.from({ length: wires.length }, () => false);
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        bfs(wires[j], visited, i);
        answer.push(n - count - count);
        count = 0;
        break;
      }
    }
  }
  answer = answer.map((item) => Math.abs(item));

  answer.sort((a, b) => a - b);

  return answer[0];
}
// BFS로 해결

function solution(n, wires) {
  let count = 1;
  // 일단 삭제할 index를 먼저 정하자
  const bfs = (current, visited, removeIndex) => {
    const queue = [current];
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const currentConnect = queue.shift();
        count = count + 1;
        // 여기서 first,second를 뽑아서 비교하면된다.
        for (let j = 0; j < wires.length; j++) {
          if (
            !visited[j] &&
            removeIndex !== i &&
            (currentConnect.includes(wires[j][0]) ||
              currentConnect.includes(wires[j][1]))
          ) {
            //만약 해당 fisrt와 second가 있다면 해당 wires는 queue에 들어간다
            visited[j] = true;
            queue.push(wires[j]);
          }
        }
      }
    }
  };
  const answer = [];

  for (let i = 0; i < wires.length; i++) {
    // 여기의 i는 사용하지 않을것
    const visited = Array.from({ length: wires.length }, () => false);
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        bfs(wires[j], visited, i);
        answer.push(Math.abs(count - (n - count)));
        count = 1;
        //여기서 없애기
        break;
      }
    }
  }

  console.log(answer);
}

function solution(n, wires) {
  let count = 0;
  // 일단 삭제할 index를 먼저 정하자
  const bfs = (current, visited, removeIndex) => {
    const queue = [current];
    while (queue.length > 0) {
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const currentConnect = queue.shift();
        count = count + 1;
        // 여기서 first,second를 뽑아서 비교하면된다.
        for (let j = 0; j < wires.length; j++) {
          if (
            !visited[j] &&
            removeIndex !== j &&
            (currentConnect.includes(wires[j][0]) ||
              currentConnect.includes(wires[j][1]))
          ) {
            //만약 해당 fisrt와 second가 있다면 해당 wires는 queue에 들어간다
            visited[j] = true;
            queue.push(wires[j]);
          }
        }
      }
    }
  };
  const answer = [];

  for (let i = 0; i < wires.length; i++) {
    // 여기의 i는 사용하지 않을것
    const visited = Array.from({ length: wires.length }, () => false);
    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        bfs(wires[j], visited, i);
        answer.push(Math.abs(n - count - count));
        count = 0;
        //여기서 없애기
        break;
      }
    }
  }

  return Math.min(...answer);
}
