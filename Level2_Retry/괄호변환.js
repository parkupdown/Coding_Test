function solution(p) {
  const isBalance = (p) => {
    let left = 0;
    let right = 0;
    for (let i = 0; i < p.length; i++) {
      p[i] === "(" ? left++ : right++;

      if (left === right) {
        return [p.slice(0, i + 1), p.slice(i + 1)];
      }
    }
  };

  const isRight = (u) => {
    const stack = [];
    if (u[0] === ")") {
      return false;
    }
    for (let i = 0; i < u.length; i++) {
      if (u[i] === ")" && stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(u[i]);
      }
    }

    return stack.length === 0 ? true : false;
  };

  const re = (p) => {
    if (p === ``) {
      return ``;
    }
    const [u, v] = isBalance(p);

    if (isRight(u)) {
      return u + re(v);
    } else if (!isRight(u)) {
      //u를 변환해야함
      const U = u
        .slice(1, u.length - 1)
        .split(``)
        .map((item) => (item === ")" ? "(" : ")"))
        .join(``);

      return `(${re(v)})${U}`;
    }
  };
  return re(p);
}
