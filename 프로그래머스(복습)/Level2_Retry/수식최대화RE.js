function solution(expression) {
  let answer = 0;

  const calculator = (giho, a, b) => {
    if (giho === "*") {
      return parseInt(a * b);
    }
    if (giho === "+") {
      return parseInt(a + b);
    }
    if (giho === "-") {
      return parseInt(a - b);
    }
  };

  expression = expression
    .split(``)
    .map((item) => {
      if (item === "*" || item === "+" || item === "-") {
        return `,${item},`;
      }
      return item;
    })
    .join(``)
    .split(`,`);

  const giho = [
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  for (let j = 0; j < 6; j++) {
    const copy = [...expression];
    for (let i = 0; i < 3; i++) {
      let index = 0;
      while (index !== copy.length) {
        if (copy[index] === giho[j][i]) {
          const result = calculator(
            giho[j][i],
            1 * copy[index - 1],
            1 * copy[index + 1]
          );
          copy.splice(index - 1, 3, result);
        } else {
          index++;
        }
      }
    }

    if (answer < Math.abs(copy[0])) {
      answer = Math.abs(copy[0]);
    }
  }

  return answer;
}
