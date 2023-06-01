/*

const numbers = [101, 10, 232, 23];
function solution(numbers) {
  const visited = Array.from({ length: numbers.length }, () => false);
  let target = 0;

  const dfs = (sum, count) => {
    if (count === numbers.length) {
      if (target < sum) {
        target = sum;
      }
      return;
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

  return String(target);
}
solution(numbers);
*/
function solution(numbers) {
  const answer = numbers
    //map으로 numbers를 일관되게 string으로 변환한다.
    .map((numbers) => String(numbers))
    .sort((a, b) => b + a - (a + b))
    .join("");

  //0인 경우는 제외해야 하니 삼항연산자 사용
  return answer[0] === "0" ? "0" : answer;
}
