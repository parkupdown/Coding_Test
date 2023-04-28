function solution(n, left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
    const floor = Math.floor(i / n);
    const count = i % n;
    //나머지가됨

    if (floor < count) {
      arr.push(count + 1);
    }
    if (floor >= count) {
      arr.push(floor);
    }
  }
  return arr;
}
