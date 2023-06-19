function solution(stones, k) {
  let left = 0;
  let right = 200000000;

  //이분탐색으로 풀기
  const canTheyCross = (mid) => {
    let brokenBridge = 0;

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) {
        //이거는 다리가 부숴졋다. 그럼 ? 이게 연속되면 mid+1번째사람은 건널수없겟지
        brokenBridge = brokenBridge + 1;
      } else {
        brokenBridge = 0;
        // 부숴진 다리의 연결성 제거를 위해 0으로 리셋
      }
      if (brokenBridge >= k) {
        return false;
        // 못건너지 k만큼떨어져버리면
      }
      //건널수있네
      // 분리된 다리가 k 보다 적으니까
    }
    return true;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canTheyCross(mid)) {
      //건널 수 있으면
      left = mid + 1;
    } else if (!canTheyCross(mid)) {
      //건널 수 없으면
      right = mid - 1;
    }
  }
  return left;
}

function solution(stones, k) {
  let answer = 20000000;
  for (let i = 0; i <= stones.length - k; i++) {
    const arr = stones.slice(i, i + k);
    const min = Math.min(...arr);
    if (answer > min) {
      answer = min;
    }
  }

  return answer;
}

function solution(stones, k) {
  let left = 0;
  let sum = 0;
  let min = 200000000;
  let answer;
  for (let i = 0; i <= stones.length; i++) {
    if (i >= k) {
      sum = sum - stones[left];
      left++;
    }

    sum = sum + stones[i];
  }
}
//이거는 321 222 를 생각해보면 알 수 있다.
