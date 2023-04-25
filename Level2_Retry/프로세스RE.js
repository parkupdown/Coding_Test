let priorities = [1, 1, 9, 1, 1, 1];
let Location = 3;

function solution(priorities, Location) {
  const Max = Math.max(...priorities);
  const MaxIndex = priorities.indexOf(Max);
  let count = 1;
  while (true) {
    let target = 0;
    let indexTarget;
    let justOne = true;
    for (let i = 0; i < priorities.length; i++) {
      if (target < priorities[i]) {
        target = priorities[i];
        indexTarget = i;
      }
      if (justOne === true && target === priorities[i] && MaxIndex < i) {
        indexTarget = i;
        justOne = false;
      }
    }
    if (indexTarget === Location) {
      return count;
    }
    delete priorities[indexTarget];
    console.log(priorities);
    count = count + 1;
    if (count === priorities.length) {
      return count;
    }
  }
}
solution(priorities, Location);
