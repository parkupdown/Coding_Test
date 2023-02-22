let people = [70, 50, 80, 50];
const limit = 100;

function solution(people, limit) {
  let Arr = people.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (Arr[0] + Arr[Arr.length - 1] <= limit) {
      Arr.pop();
      Arr.shift();
      i = 0;
      count = count + 1;
    } else if (Arr[0] + Arr[Arr.length - 1] > limit) {
      Arr.pop();
      i = 0;
      count = count + 1;
    }
  }
  return count + Arr.length;
}

/*

const people = [70, 50, 80, 50];
const limit = 100;
// 50 50 70 80
function solution(people, limit) {
  const Arr = people.sort((a, b) => a - b);
  let count = 0;
  let sum = 0;

  for (let i = 0; i < Arr.length; i++) {
    sum = sum + Arr[i];
    if (sum > limit) {
      sum = Arr[i];
      count = count + 1;
    }
  }
  if (count === 0) {
    return 1;
  }

  return count + 1;
}

solution(people, limit);

*/
