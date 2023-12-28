let n = 6;
function solution(n) {
  const answer = [];
  let x = -1;
  let y = 0;
  let count = 0;
  let arr = [[], [], [], [], [], []];
  while (n > 0) {
    for (let i = 0; i < n; i++) {
      count = count + 1;
      x = x + 1;
      arr[x][y] = count;
      // 순서적으로 추가할 때 x,y의 수가 배열에 들어갈수있는 index인지를 확인하자!
    }
    for (let i = 0; i < n - 1; i++) {
      y = y + 1;
      count = count = count + 1;
      arr[x][y] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      y = y - 1;
      x = x - 1;
      count = count + 1;
      arr[x][y] = count;
    }
    n = n - 3;
  }
  arr.forEach((item) => item.forEach((item2) => answer.push(item2)));
  return answer;
}
solution(n);

function solution(n) {
  let a = Array(n)
    .fill()
    .map((_, i) => Array(i + 1).fill());
  let row = -1;
  let col = 0;
  let fill = 0;
  for (let i = n; i > 0; i -= 3) {
    a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
    for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
    for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
  }
  return a.flat;
}

solution(n);

//n 의 배열은 일단은 이중배열
//n= 6이라면
/*
[
[1]
[2,15]
[3,?,14]
[4,?,?,13]
[5,?,?,?,12]
[6,7,8,9,10,11]
]


*/
