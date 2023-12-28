function solution(priorities, location) {
  // 일단 가장 우선순위가 높은게 먼저 빠져나감
  // 그리고 그 시점부터 또 높은 게 장땡임

  let count = 0;
  for (let i = 0; i < priorities.length; i++) {
    let max = Math.max(...priorities);
    for (let j = 0; j < priorities.length; j++) {
      if (max === priorities[j]) {
        priorities.splice(j, 1, 0);
        max = Math.max(...priorities);
        count = count + 1;
        //최댓값갱신
        if (location === j) {
          return count;
        }
      }
    }
  }
}
