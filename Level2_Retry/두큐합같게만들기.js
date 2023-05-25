let queue1 = [3, 2, 7, 2];
let queue2 = [4, 6, 5, 1];

function solution(queue1, queue2) {
  const queueAll = [...queue1, ...queue2];
  const queueSum = queueAll.reduce((acc, cur) => acc + cur);
  const queueLength = queue1.length * 3;
  const halfOfQueueSum = queueSum / 2;
  // 이 숫자를 만족해야함 . queueSum의 절반값
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur);
  console.log(queue2Sum);
  let count = 0;
  let queue1Index = 0;
  let queue2Index = 0;

  // 만약 quque2의 총 합이 halfOfQueueSum보다 작다면 ?
  //그럼 더하는 거 부터 시작해야하는데
  // 작다면 일단 추가하는거만 하는거지 크다면 ? 빼는거만하는거고

  while (true) {
    if (queue2Index >= queueLength) {
      return -1;
    }

    if (queue2Sum === halfOfQueueSum) {
      return count;
    }

    if (queue2Sum < halfOfQueueSum) {
      // 작다면?
      queue2.push(queue1[queue1Index]);
      //queue1의 원소를 추가해줌
      queue2Sum = queue2Sum + queue1[queue1Index];

      queue1Index = queue1Index + 1;
    } else if (queue2Sum > halfOfQueueSum) {
      // 크다면?
      queue1.push(queue2[queue2Index]);
      // queue2의 원소를 추가해줌
      queue2Sum = queue2Sum - queue2[queue2Index];

      queue2Index = queue2Index + 1;
    }
    count = count + 1;
  }
}
solution(queue1, queue2);
