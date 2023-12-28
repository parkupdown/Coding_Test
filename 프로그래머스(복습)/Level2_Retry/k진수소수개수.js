let n = 437674;
let k = 3;

function checkPrime(numbers) {
  if (numbers < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numbers); i++) {
    if (numbers % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  n = n.toString(k).split("0");
  n = n.filter((num) => checkPrime(num));

  return n.length;
}

solution(n, k);
