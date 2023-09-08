function solution(numbers) {
  // 만들 수 있는 소수의 개수
  // dfs로 하면 될듯
  // 처음 시작이 0만아니면 됨
  // 그리고 소수판별 함수
  const checkPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const visited = Array.from({ length: numbers.length }, () => false);

  const answer = [];
  const dfs = (sum) => {
    if (checkPrime(sum) && !answer.includes(sum) && sum !== `` && sum !== "1") {
      //소수이고 아직 answer에 저장된 게 아니라면 넣기
      answer.push(sum);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (sum === `` && numbers[i] === "0") {
        continue;
      }
      if (!visited[i]) {
        visited[i] = true;
        dfs(sum + numbers[i]);
        visited[i] = false;
      }
    }
  };
  //시작이 0만 아니면 됨

  dfs(``);

  return answer.length;
}
