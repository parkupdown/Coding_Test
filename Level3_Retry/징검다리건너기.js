function solution(stones, k) {
  //일단 stones가 2억이니까 이분탐색을 고려
  //몇명건널수있는지
  //최대의 수는 2억 x 200000이지 않을까

  // 건널 수 없는 경우는 k개만큼 끊어져있으면 ?
  // 건널 수 없다
  const check = (stones, friends) => {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
      stones[i] <= friends ? count++ : (count = 0);
      if (count === k) {
        return false;
      }
    }
    return true;
  };
  let start = 0;
  let end = 200000000 * 200000;
  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);

    if (!check(stones, mid)) {
      end = mid - 1;
    } else if (check(stones, mid)) {
      start = mid + 1;
    }
  }

  return start;
}
