//n의 몫이 1일 때 까지 계속 나누고 나머지가 발생하면 count는 +1

function solution(n) {
  if (n === 1) {
    return 1;
  }
  let jump = 1;
  while (n !== 1) {
    if (n % 2 !== 0) {
      jump = jump + 1;
    }
    //이걸 그냥 n%2를더해줘버려도된다.
    n = Math.floor(n / 2);
  }
  return jump;
}

solution(n);
