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
function solution(people, limit) {
  // 투포인터로?
  let answer = 0;
  people.sort((a, b) => b - a);
  // 만약 왼쪽이 움직이는데 오른쪽은 무조건 빠지는거자나
  // 근데 만약 오른쪽과 왼쪽의 차이가 1밖에 나지 않는다면 앞에거는 다 혼자타야함
  let start = 0;
  let end = people.length - 1;
  while (start <= end) {
    if (start === end) {
      return answer + 1;
    }
    if (people[end] + people[start] <= limit) {
      //탈수있음 end = end-1
      end = end - 1;
      start = start + 1;
      answer = answer + 1;
    } else if (people[end] + people[start] > limit) {
      //탈수없음 오른쪽꺼하나떙겨
      start = start + 1;
      answer = answer + 1;
      // 혼자타는놈발생
    }
  }
  // 1차이나면 그때 Start 앞부분은 싹다 넣으면됨
  return answer;
}
