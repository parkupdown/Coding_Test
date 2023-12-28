function solution(n, times) {
  // 10억을 천천히 나누면서
  const check = (mid) => {
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count = count + Math.floor(mid / times[i]);
      if (count >= n) {
        return false;
      }
    }
    return true;
  };

  let left = 0;
  let right = 1000000000 * 1000000000;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //중간값

    if (!check(mid)) {
      right = mid - 1;
    } else if (check(mid)) {
      left = mid + 1;
    }
  }

  return left;
}
