let priorities = [1, 2, 8, 3, 10];
let lo = 0;
function solution(priorities, lo) {
  // 배열에서 가장 큰 수를 찾고
  // 그 큰 수의 indexOf를찾는다
  // 그 후 slice=>앞
  // splice => 삭제 후 뒤에 붙여주기
  let index = priorities.map((item, index) => index);
  let count = 1;
  while (priorities.length > 0) {
    const max = Math.max(...priorities);
    const maxIndex = priorities.indexOf(max);
    if (index[maxIndex] === lo) {
      return count;
    }
    let push = priorities.slice(0, maxIndex);
    let pushIndex = index.slice(0, maxIndex);
    if (maxIndex === 0) {
      push = [];
      pushIndex = [];
    }
    let arr = priorities.slice(maxIndex + 1);
    let arrIndex = index.slice(maxIndex + 1);
    console.log(priorities);
    console.log(index);
    console.log(arr);
    console.log(arrIndex);
    priorities = [...arr, ...push];
    index = [...arrIndex, ...pushIndex];
    count++;
  }
  return count;
}
solution(priorities, lo);

function solution(priorities, lo) {
  // 배열에서 가장 큰 수를 찾고
  // 그 큰 수의 indexOf를찾는다
  // 그 후 slice=>앞
  // splice => 삭제 후 뒤에 붙여주기
  let index = priorities.map((item, index) => index);
  let count = 1;
  while (priorities.length > 0) {
    const max = Math.max(...priorities);
    const maxIndex = priorities.indexOf(max);
    if (index[maxIndex] === lo) {
      return count;
    }
    let push = priorities.slice(0, maxIndex);
    let pushIndex = index.slice(0, maxIndex);
    if (maxIndex === 0) {
      push = [];
      pushIndex = [];
    }
    let arr = priorities.slice(maxIndex + 1);
    let arrIndex = index.slice(maxIndex + 1);
    priorities = [...arr, ...push];
    index = [...arrIndex, ...pushIndex];
    count++;
  }
  return count;
}
//slice범위가 잘못됨 (0,2) 면??
//2전까지 자름 ㅋㅋ
