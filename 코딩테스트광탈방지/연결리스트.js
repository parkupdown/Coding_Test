class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    let init = new Node(`init`);
    this.head = init;
    this.tail = init;
  }

  append(data) {
    const 새로운노드 = new Node(data);
    this.tail.next = 새로운노드;
    this.tail = 새로운노드;
  }
}

const a = new linkedList();
console.log(a)
a.append(1);
a.append(2);
a.append(3);
console.log(a);
