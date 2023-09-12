const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return arr.map((item) => [item]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
};

function solution(n, k, enemy) {
  // 매 라운드마다 enemy[i]마리의 적이 등장
  // 남은 병사 중 enemy[i]명 만큼 소모해서 막는다.

  // 얼마나 버틸수있나

  // 무적권은 최대 k번 사용이 가능

  // 병사의수 n, 무적스킬 k, 적은 enemy

  // k를 기준으로 언제사용하느냐에 따라 달라지네

  // 그럼 k를 index별 해서 순열을 구하는 문제네

  // k가 0,1,2 0,1,3 등

  // k의 길이만큼 dfs를 for문으로 문제를 해결하면된다.

  //그럼 k길이만큼 조합을 만드는 건데 어떻게할 수 있을까

  //[0,1,2,3,4,5] 의 배열이 있다고 가정하자

  // 이중 3개를 뽑아 조합을 만든다면

  // 0,1,2 0,1,3 0,1,4 0,1,5 => 1,2,3 1,2,4 1,2,5 ...

  // 그럼 일단 fixIndex의 요소는 처음에 가져오고 for문을 순회하면서 큰것만

  const answer = [];
  const kIndex = Array.from({ length: enemy.length }, (_, index) => index);

  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) {
      return arr.map((item) => [item]);
    }

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);

      results.push(...attached);
    });
    return results;
  };

  const results = getCombinations(kIndex, k);
  let answers = [];
  for (let i = 0; i < results.length; i++) {
    let candidateK = results[i];
    let clear = 0;
    for (let j = 0; j < enemy.length; j++) {
      if (candidateK[0] === j) {
        // 무적권을 사용하는 순서와 적의 순서가 같다면
        clear = clear + 1;
        candidateK.shift();
      } else if (candidateK[0] !== j) {
        const attack = enemy[j];
        n = n - attack;
        clear = clear + 1;
        if (n <= 0) {
          answers.push(clear);
          break;
        }
      }
    }
  }
  if (answers.length === 0) {
    return k;
  }

  answers = Math.max(...answers);
  return answers;
}
//20점
