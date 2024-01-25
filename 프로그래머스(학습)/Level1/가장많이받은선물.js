// KakaoTest
function solution(friends, gifts) {
  // 이번달을 기준으로 다음 달에 누가 선물을 많이 받을지 예측
  // 이번달까지 더 많은 선물은 준 사람이 다음달에 하나 더 받는다
  // 주고받은 기록이 없다면 선물 지수가 더 큰사람이 받는다
  // 선물지수 -> 준선물-받은선물
  // 선물을 가장 많이 받는 친구의 선물 수

  // [준사람, 받은사람]

  // 일단 선물 받은거 준거 정리를 해야한다.

  // 1. 두 사람 사이에 누가 더 많이 줬는지
  // 2. 두 사람 사이에 누가 많이 준지 알 수 없다면 선물 지수가 더 크면 받는다.(많이 줬으면)
  // 3. 선물지수도 같으면 주고받지 않는다.

  // 어떤 둘 사이의 관계가 있는지가 중요하다.
  // 그 반대의 경우도 생각을 해야함
  const answer = new Map();
  let hash = new Map();

  for (let i = 0; i < friends.length; i++) {
    hash.set(friends[i], 0);
    answer.set(friends[i], 0);
  }

  const giftArr = gifts.map((gift) => gift.split(` `));

  giftArr.forEach((arr, index) => {
    hash.set(arr[0], hash.get(arr[0]) + 1);
    hash.set(arr[1], hash.get(arr[1]) - 1);
  });
  // hash는 만들었음 이제 둘 중 상대전적? 을 비교할 수 있으면 된다.

  // 각 한번 돌때마다 그냥 계산이 되게해버림 visited활용

  let visited = Array.from({ length: gifts.length }, () => false);

  for (let i = 0; i < gifts.length; i++) {
    const target = gifts[i];
    const reverseTarget = gifts[i].split(` `).reverse().join(` `);
    let targetCount = 0;
    let reverseTargetCount = 0;
    const [send, get] = gifts[i].split(` `);
    if (!visited[i]) {
      for (let j = 0; j < gifts.length; j++) {
        if (target === gifts[j]) {
          targetCount++;
          visited[j] = true;
        } else if (reverseTarget === gifts[j]) {
          reverseTargetCount++;
          visited[j] = true;
        }
      }
      console.log(visited, targetCount, reverseTargetCount);
      if (targetCount === reverseTargetCount) {
        const front = hash.get(send);
        const back = hash.get(get);
        if (front === back) {
          break;
        }
        if (front > back) {
          answer.set(send, answer.get(send) + 1);
          break;
        } else if (front < back) {
          answer.set(get, answer.get(get) + 1);
          break;
        }
      } else if (targetCount > reverseTargetCount) {
        answer.set(send, answer.get(send) + 1);
      } else {
        answer.set(get, answer.get(get) + 1);
      }
    }
  }

  console.log(answer);
} // 실패

function solution(friends, gifts) {
  // friends => [muzi, ryan, frodo, neo]
  // 각 애들이 선물 몇개받는지가 중요함

  // 선물 주고받지않았다면 선물지수 따지기

  const hash = new Map();
  friends.forEach((friend) => hash.set(friend, 0));

  for (let i = 0; i < gifts.length; i++) {
    const [give, get] = gifts[i].split(` `);
    hash.set(give, hash.get(give) + 1);
    hash.set(get, hash.get(get) - 1);
  }
  // hash는 선물지수를 담고있음

  // 이제 muzi와 각각 다른 friend들을 비교하여 선물을 받을지 말지를 결정

  // 주고받은경우가 있는경우
  // 주고받은경우가 없는경우
  const answer = [];
  for (let i = 0; i < friends.length; i++) {
    let sum = 0;
    for (let j = 0; j < friends.length; j++) {
      if (i !== j) {
        const string1 = friends[i] + ` ` + friends[j];
        const string2 = friends[j] + ` ` + friends[i];
        let sum1 = 0;
        let sum2 = 0;
        for (let k = 0; k < gifts.length; k++) {
          if (string1 === gifts[k]) {
            sum1++;
          } else if (string2 === gifts[k]) {
            sum2++;
          }
        }
        if (sum1 === sum2) {
          // 주고받은경우가 없는경우
          const first = hash.get(friends[i]);
          const second = hash.get(friends[j]);
          if (first > second) {
            // 이경우에만 +1
            sum = sum + 1;
          }
        } else if (sum1 > sum2) {
          sum = sum + 1;
        }
      }
    }
    answer.push(sum);
  }
  return Math.max(...answer);
} // 성공
