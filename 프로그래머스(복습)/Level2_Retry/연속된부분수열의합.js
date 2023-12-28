let sequence = [7, 5, 5, 1, 1, 50, 50];
let k = 100;

function solution(sequence, k) {
  let check = 999;
  let answer;
  const dfs = (sum, index, firstIndex) => {
    if (sum >= k || index === sequence.length) {
      if (sum === k && index - firstIndex < check) {
        check = index - firstIndex;

        answer = [firstIndex, index - 1];
      }
      return;
    }

    dfs(sum + sequence[index], index + 1, firstIndex);
  };

  for (let i = 0; i < sequence.length; i++) {
    dfs(0, i, i);
  }
  return answer;
}

solution(sequence, k);

/*
function solution(sequence, k) {
  const visited = Array.from({ length: sequence.length }, () => false);
  let plusCount;

  const dfs = (sum, count, index) => {
    if (sum >= k) {
      console.log(sum, count, index);
      return;
    }

    for (let i = 0; i < sequence.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(sum + sequence[i], count + 1, i);
        visited[i] = false;
      }
    }
  };
  dfs(0, 0, 0);
}
solution(sequence, k);
// 이렇게하면 모든경우가 탐색됨
*/
/*
function solution(sequence, k) {
  let firstIndex = 0;
  let count = 1;
  let sum = sequence[firstIndex];
  while (firstIndex<=sequence.length) {
    sum = sum + sequence[firstIndex + count];
    count = count + 1;
    if (sum >= k) {
      if (sum === k) {
      }
      firstIndex = firstIndex + 1;
      count = 0;
      sum = sequence[firstIndex];
    }
  }
}
*/
