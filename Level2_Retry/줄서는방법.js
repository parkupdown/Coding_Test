let n = 3;
let k = 5;

function solution(n, k) {
  const visited = [];
  let count = 0;
  let answer;
  const dfs = () => {
    if (visited.length === n) {
      count = count + 1;
      //count가 1번뿐이잖아 얘한테는
      if (count === k) {
        answer = [...visited];
      }
    }

    for (let i = 1; i <= n; i++) {
      if (!visited.includes(i)) {
        visited.push(i);

        dfs();

        visited.pop();
      }
    }
  };

  dfs();

  return answer;
}
solution(n, k);
