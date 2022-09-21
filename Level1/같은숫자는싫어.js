const arr = [1, 1, 3, 3, 0, 1, 1];
function solution(arr) {
  let answer = [];
  let arrlength = arr.length; //7 count가 6이되면스탑!
  let count = 0;
  while (arrlength - 1 > count) {
    if (arr[count] === arr[count + 1]) {
      count = count + 1;
    } else {
      answer.push(arr[count]);
      count = count + 1;
    }
  }
  answer.push(arr[arrlength - 1]);
  return answer;
}
solution(arr);
/*function solution(arr) {
 return arr.filter((item,index)=> item!== arr[index+1])
} 이것도가능 */
