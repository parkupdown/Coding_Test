const n = 24;
function solution(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 1 && n % i === 0) {
      count++;
    }
  }
  return count;
}
solution(n);
//연속된 자연수의 합이 될 경우의 수는
//약수 중 홀수의 갯수와 같다.

//이걸 몰랐을때 생각해보자

const n = 15;
function solution(n) {
  let arr = [];
  let sum = 0;
  let count = 0;
  let check = 0;
  for (i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > n) {
      check = check + 1;
      i = check;
      sum = 0;
    } else if (sum === n) {
      check += 1;
      count += 1; //이게 더 효율성있게 나옴
      //count= count+1보다
      i = check;
      sum = 0;
    }
  }
  return count;
}
solution(n);
