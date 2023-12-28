const d = [1, 3, 2, 5, 4];
const budget = 9;
//최대 몇개의 부서에게 물품구매해줄수있는지
function solution(d, budget) {
  let sum = 0;
  let count = 0;
  const sortd = d.sort((a, b) => a - b); //[1,2,3,4,5]
  sortd.forEach((item) => {
    sum = sum + item;
    if (sum > budget) {
      return;
    }
    count++;
  });
  return count;
}
solution(d, budget);
