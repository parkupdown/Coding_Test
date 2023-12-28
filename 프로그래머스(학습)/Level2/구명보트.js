const people = [70, 50, 80, 50];
const limit = 120;
function solution(people, limit) {
  //[80,70,50,50]
  let count = 0;
  let A = people.sort((a, b) => b - a);
  for (i = 0; i < A.length; i++) {
    if (i === A.length - 1) {
      break;
    }
    if (A[i] + A[A.length - 1] <= limit) {
      count = count + 1;
      A.pop();
    }
  }
  return A.length;
}
solution(people, limit);

//통과!!
