let numbers = "17";

function solution(numbers) {
  const arr = [];

  let answer = 0;
  numbers = numbers.split(``);
  //배열로 변환

  let visited = Array.from({ length: numbers.length }, () => false);

  const dfs = (sum, count) => {
    if (count > numbers.length) {
      return;
    }
    if (sum[0] === `` + 0) {
      return;
    }
    if (isPrime(sum) && !arr.includes(sum) && sum !== `` && sum !== `` + 1) {
      arr.push(sum);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        dfs(sum + numbers[i], count + 1);
        visited[i] = false;
      }
    }
  };
  dfs(``, 0);
  return arr.length;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
solution(numbers);
