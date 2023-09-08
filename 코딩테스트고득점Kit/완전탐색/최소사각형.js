function solution(sizes) {
  let max = [];
  let min = [];

  for (let i = 0; i < sizes.length; i++) {
    const minNum = Math.min(...sizes[i]);
    const maxNum = Math.max(...sizes[i]);

    max.push(maxNum);
    min.push(minNum);
  }
  //작은 것중 최대값

  min = Math.max(...min);
  max = Math.max(...max);

  return min * max;
}
