function solution(n, times) {
  // 모든 사람이 심사받는데 걸리는 시간
  // n이 엄청나게 크다.
  // return 시간만큼 걸린다고 가정하면
  //만약 30분이라면 7로나누면 4.xx 10으로나누면 3명
  // 7명봄 그래서 다시 이분으로 30분이 아닌 그 절반값이 되겠지

  //먼저 n보다 넘었는지 안넘었는지를 확인하는 함수
  const check = (arr, mid) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + Math.floor(mid / arr[i]);
      if (sum >= n) {
        //만약 sum이 n보다 커버리면
        return false;
      }
    }
    return true;
  };
  //여기서 mid가 최소 시간값을 찾는 최대값이된다.
  let right = 1000000000 * 1000000000;
  let left = 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (!check(times, mid)) {
      right = mid - 1;
    } else if (check(times, mid)) {
      left = mid + 1;
    }
  }

  return left;
}
