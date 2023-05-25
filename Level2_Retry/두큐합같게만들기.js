let queue1 = [1, 2, 1, 2];
let queue2 = [1, 10, 1, 2];

function solution(queue1, queue2) {
  const queueAll = [...queue1, ...queue2];
  const queueSum = queueAll.reduce((acc, cur) => acc + cur);
  const halfOfQueueSum = queueSum / 2;
  // 이 숫자를 만족해야함 . queueSum의 절반값
  let queue2Sum;
  let count = 0;

  // 만약 quque2의 총 합이 halfOfQueueSum보다 작다면 ?
  //그럼 더하는 거 부터 시작해야하는데
  // 작다면 일단 추가하는거만 하는거지 크다면 ? 빼는거만하는거고

  while (true) {
    console.log(queue1, queue2);
    if (queue1.length === 0 || queue2.length === 0) {
      return -1;
    }
    queue2Sum = queue2.reduce((acc, cur) => acc + cur);

    if (queue2Sum === halfOfQueueSum) {
      return count;
    }

    if (queue2Sum < halfOfQueueSum) {
      const queue1Removed = queue1.shift();
      queue2.push(queue1Removed);
    } else if (queue2Sum > halfOfQueueSum) {
      const queue2Removed = queue2.shift();
      queue1.push(queue2Removed);
    }
    count = count + 1;
  }
}
solution(queue1, queue2);
