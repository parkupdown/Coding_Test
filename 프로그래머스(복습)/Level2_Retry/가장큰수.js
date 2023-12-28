let numbers = [6, 10, 2];

function solution(numbers) {
  const visited = Array.from({ length: numbers.length }, () => false);

  let answer = 0;

  const dfs = (sum) => {
    if (answer < parseInt(sum)) {
      answer = parseInt(sum);
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        //방문
        dfs(sum + numbers[i]);
        visited[i] = false;
      }
    }
  };
  dfs(``);

  return String(answer);
}
solution(numbers);
