//아래의 numbers를 조합해서 만들수있는 다른
const numbers = [2, 1, 3, 4, 1];
function solution(numbers) {
  let count = 0;
  let answers = [];
  while (count !== numbers.length) {
    let sum = 0;
    let array = numbers.filter((item, index) => index > count);
    for (i = 0; i < array.length; i++) {
      sum = numbers[count] + array[i];
      if (answers.includes(sum) === false) {
        answers.push(sum);
      }
    }
    count++;
  }
  return answers.sort((a, b) => a - b);
}
solution(numbers); //그냥 i j 로해도됨!
//Set은 객체를 생성한다
//const lol = new Set(1,2,3)
