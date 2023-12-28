const priorities = [1, 2, 3, 2];
const locations = 2;

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;

    return value;
  }
  peek() {
    return this.queue[this.front];
  }
}

function solution(priorities, locations) {
  const queue = new Queue();
  let count = 0;
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  while (true) {
    let currentValue = queue.peek();
    if (priorities[count] > currentValue[0]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count = count + 1;
      if (value[1] === locations) {
        return count;
      }
    }
  }
  return count;
}

solution(priorities, locations);
//index를 추적할 수 있어야 함

//location에 따라 몇 번 째인지 추적이 가능해야한다.

//priorities를 활용하여 같은 배열을 하나 더 만든다. [1,2,3,4,5,6]

// 이런식으로 이 배열을 하나 만들어 location의 고정값을 만들고 규칙대로 진행하면될것
