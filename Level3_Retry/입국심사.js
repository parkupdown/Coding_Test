function solution(n, times) {
  //최대 시간은 1000000000 * 1000000000 분
  // 이정도의 시간이면 몇명 패스할수있는지
  // n보다 크거나 같으면? end에서 감소시켜야겠지
  // n보다 작으면 ?start가 이동해야겠지

  const check = (n, mid) => {
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count = count + Math.floor(mid / times[i]);
      if (count >= n) {
        return false;
      }
    }
    return true;
  };
  //false면 오른쪽이동 true면 왼쪽이동
  let start = 0;
  let end = 1000000000 * 1000000000;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (check(n, mid) === false) {
      end = mid - 1;
    } else if (check(n, mid) === true) {
      start = mid + 1;
    }
  }

  return start;
}
