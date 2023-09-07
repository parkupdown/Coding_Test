function solution(numbers, target) {
  //더하기도하고 빼기도하면서 3이되는지
  // 각 배열을 순회하긴해야함
  // 모두사용해야하구나
  let count = 0;

  const dfs = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        count = count + 1;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  };
  dfs(0, 0);

  return count;
}
