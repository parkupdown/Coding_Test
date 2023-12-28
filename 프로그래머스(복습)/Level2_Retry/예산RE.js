function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  while (d.length > count) {
    budget = budget - d[count];

    if (budget < 0) {
      return count;
    }
    count = count + 1;
  }
  return count;
}
