/*
let numbers = "172";
function solution(numbers) {
  const NL = numbers.length;
  const answer = [];
  function dfs(numbers, target, index) {
    if (target.length === numbers.length) {
      return;
    }
    target = target + numbers[index % NL];
    answer.push(target);

    for (let i = 0; i < numbers.length; i++) {
      dfs(numbers, target, index + i);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    dfs(numbers, ``, i);
  }
}
solution(numbers);

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
*/
