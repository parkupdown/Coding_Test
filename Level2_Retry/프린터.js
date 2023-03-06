var priorities = [2, 1, 3, 2];
let loca = 1;
function solution(priorities, loca) {
  let answer = 0;
  let Max = Math.max(...priorities);
  const indexArr = priorities.map((item, index) => index);
  while (true) {
    if (priorities[0] < Max) {
      priorities.push(priorities.shift());
      indexArr.push(indexArr.shift());
    } else {
      answer = answer + 1;
      if (indexArr[0] === loca) {
        return answer;
      }

      priorities.shift();
      indexArr.shift();
      Max = Math.max(...priorities);
    }
  }
}
solution(priorities, loca);
