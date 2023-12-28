function solution(tickets) {
  let answer = [];
  const visited = Array.from({ length: tickets.length }, () => false);
  const dfs = (currentAir, sum) => {
    //언제 return 해야할까
    if (!visited.includes(false)) {
      answer.push(sum + `${currentAir}`);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && currentAir === tickets[i][0]) {
        visited[i] = true;
        dfs(tickets[i][1], sum + `${tickets[i][0]},`);
        visited[i] = false;
      }
    }
  };

  dfs("ICN", ``);

  answer = answer
    .map((item) => item.split(`,`).join(`,`))
    .sort((a, b) => (a > b ? 1 : -1))
    .map((item) => item.split(`,`));

  return answer[0];
}

function solution(p) {

  const sliceWord = (word) => {
    let left = ``;
    let right = ``;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "(") {
        left = left + "(";
      }
      if (word[i] === ")") {
        right = right + ")";
      }
      if (left.length === right.length) {
        return [left, right];
      }
    }
  };
  //slice함수끝

  const check = (word) => {
    const stack = [];
    for (let i = 0; i < word.length; i++) {
      if (stack[stack.length - 1] === "(" && word[i] === ")") {
        stack.pop();
      } else {
        stack.push(word[i]);
      }
    }
    return stack.length === 0 ? true : false;
  };

  const makeWord = (p) => {
    if (p.length === 0) {
      return ``;
    }
    const [u, v] = sliceWord(p);

    if (check(u)) {
      return u + makeWord(v);
      //만약 올바른 괄호문자열이면?
    }
    if (!check(u)) {
      //만약 올바른 괄호문자열이 아니면?
      const slicedU = u.slice(1, u.length - 1).split(``).reverse().joun(``);
      return "(" + makeWord(v) + ")" + slicedU;
    }
  };

  return makeWord(p);
}
