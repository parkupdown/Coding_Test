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

function solution(sticker) {
  // 원형이기 때문에 순서는 무의미

  // 0 or 1이 시작점이도 +2 +3 중 그냥 큰거 쭉 가지고 가면될듯
  let answer = 0;
  const bfs = (startIndex, sum) => {
    const queue = [[startIndex, sum]];
    while (queue.length > 0) {
      const queueLength = queue.length;

      for (let i = 0; i < queueLength; i++) {
        const [index, sum] = queue.shift();
        if (sum > answer) {
          answer = sum;
        }
        if (index + 2 < sticker.length - 1 + startIndex) {
          queue.push([index + 2, sum + sticker[index + 2]]);
        }
        if (index + 3 < sticker.length - 1 + startIndex) {
          queue.push([index + 3, sum + sticker[index + 3]]);
        }
      }
    }
  };

  bfs(0, sticker[0]);
  bfs(1, sticker[1]);

  return answer;
}

function solution(sticker) {
  // 0 or 1부터 +2 or +3씩 나아가면됨
  let answer = 0;
  const bfs = (startIndex) => {
    const queue = [[startIndex, sticker[startIndex]]];
    // startIndex와 첫 sum의 요소를 가져옴
    while (queue.length > 0) {
      // queue가 다 빠질때까지 순환할거임
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const [index, sum] = queue.shift();
        // 각 queue요소의 index, sum을 가져옴
        // 이제 각 sum에 더할 수 있어야한다.
        for (let j = 2; j <= 3; j++) {
          if (index + j - startIndex < sticker.length - 1) {
            const plus = sticker[(index + j) % sticker.length];
            queue.push([index + j, sum + plus]);
            if (sum + plus > answer) {
              answer = sum + plus;
            }
          }
        }
      }
    }
  };
  bfs(0);
  bfs(1);

  return answer;
}

function solution(sticker) {
  // 0 or 1 부터 출발해서 +2, +3 둘 중 더 큰걸로

  // 큰거 작은거 각각 +2 +3 중 일단 start

  //그런식으로 계속 비교하며 큰걸로나아감
  const stickerLength = sticker.length;
  const answer = [];
  const detach = (index) => {
    let firstIndex = index + 2;
    let secondIndex = index + 3;
    let first = sticker[firstIndex];
    let second = sticker[secondIndex];

    while (true) {
      if (sticker[firstIndex + 2] < sticker[firstIndex + 3]) {
        //만약 firstIndex+2 보다 firstIndex+3한 값이 더 크다면?
        firstIndex = firstIndex + 3;
      } else if (sticker[firstIndex + 2] >= sticker[firstIndex + 3]) {
        firstIndex = firstIndex + 2;
      }
      if (firstIndex - index > stickerLength - 2) {
        answer.push(first, second);
        return;
      }
      first = first + sticker[stickerLength % firstIndex];

      if (sticker[secondIndex + 2] < sticker[secondIndex + 3]) {
        //만약 secondIndex+2 보다 secondIndex+3한 값이 더 크다면?
        secondIndex = secondIndex + 3;
      } else if (sticker[secondIndex + 2] >= sticker[secondIndex + 3]) {
        secondIndex = secondIndex + 2;
      }
      if (secondIndex - index > stickerLength - 2) {
        answer.push(first, second);
        return;
      }
      second = second + sticker[stickerLength % secondIndex];
    }
  };
  detach(0);
  detach(1);
}

function solution(sticker) {
  // 기억하는 식으로 해야하는데

  // index와 합쳐진 sum
  const answer = [];
  const dfs = (firstIndex, index, sum) => {
    if (index - firstIndex > sticker.length - 2) {
      answer.push(sum);
      return;
    }
    dfs(firstIndex, index + 2, sum + sticker[index % sticker.length]);
    dfs(firstIndex, index + 3, sum + sticker[index % sticker.length]);
  };

  dfs(0, 0, 0);
  dfs(1, 1, 0);

  return Math.max(...answer);
}
//dfs로 해결하려했음 근데 시간 초과

function solution(sticker) {
  if (sticker.length === 1) {
    return sticker[0];
  }
  const dp1 = Array.from({ length: sticker.length }, () => 0);
  const dp2 = Array.from({ length: sticker.length }, () => 0);

  //[0,0,0,0,0,0,0,0]
  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  //1번을 떼는경우
  dp2[1] = sticker[1];
  //2번을 떼는경우

  for (let i = 2; i < sticker.length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
  }
  for (let j = 2; j < sticker.length; j++) {
    dp2[j] = Math.max(dp2[j - 1], dp2[j - 2] + sticker[j]);
  }

  return Math.max(dp1[sticker.length - 2], dp2[sticker.length - 1]);
}
//dp로 해결했으니 블로그 참조

//스스로 리펙토링 필요
