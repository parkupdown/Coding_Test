let n = 8;
let a = 4;
let b = 7;

function solution(n, a, b) {
  let count = 0;
  while (true) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    count = count + 1;
    if (a === b) {
      return count;
    }
  }
}

// 나누고 Math.
