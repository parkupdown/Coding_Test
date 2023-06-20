function solution(expression) {
  const sign = ["*", "-", "+"].filter((item) => expression.includes(item));
  //포함된 것만 추출
  let indexArr;

  if (sign.length === 1) {
    indexArr = [[0]];
  } else if (sign.length === 2) {
    indexArr = [
      [0, 1],
      [1, 0],
    ];
  } else {
    indexArr = [
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 1, 0],
      [2, 0, 1],
    ];
  }
  expression = expression
    .split(``)
    .map((item) => {
      if (item === "-" || item === "*" || item === "+") {
        return `,${item},`;
      }
      return item;
    })
    .join(``)
    .split(`,`);
  //여기서 변환해줌
}

function solution(expression) {
  let answer = 0;
  const combi = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  const calculator = (a, b, giho) => {
    if (giho === "+") {
      return a + b;
    } else if (giho === "-") {
      return a - b;
    } else {
      return a * b;
    }
  };

  const arr = expression
    .split(``)
    .map((item) => {
      if (item === "*" || item === "-" || item === "+") {
        return `,${item},`;
      }
      return item;
    })
    .join(``)
    .split(`,`);

  for (let i = 0; i < combi.length; i++) {
    const copyArr = [...arr];
    for (let j = 0; j < combi[0].length; j++) {
      let index = 1;
      while (copyArr[index] !== undefined) {
        if (copyArr[index] === combi[i][j]) {
          const result = calculator(
            copyArr[index - 1],
            copyArr[index + 1],
            combi[i][j]
          );
          copyArr.splice(index - 1, 3, result);
        }
      }
    }
    if (copyArr[0] > answer) {
      answer = copyArr[0];
    }
  }
  return answer;
}

function solution(expression) {
  let answer = 0;
  const combi = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];
  const calculator = (a, b, giho) => {
    if (giho === "+") {
      return parseInt(a) + parseInt(b);
    } else if (giho === "-") {
      return parseInt(a) - parseInt(b);
    } else {
      return parseInt(a) * parseInt(b);
    }
  };

  const arr = expression
    .split(``)
    .map((item) => {
      if (item === "*" || item === "-" || item === "+") {
        return `,${item},`;
      }
      return item;
    })
    .join(``)
    .split(`,`);

  for (let i = 0; i < combi.length; i++) {
    const copyArr = [...arr];
    for (let j = 0; j < combi[0].length; j++) {
      let index = 0;
      while (index < copyArr.length) {
        //index가 언제 탈출해야하지..
        if (copyArr[index] === combi[i][j]) {
          const result = calculator(
            copyArr[index - 1],
            copyArr[index + 1],
            combi[i][j]
          );
          copyArr.splice(index - 1, 3, result);
        } else {
          index = index + 1;
        }
      }
    }
    if (Math.abs(copyArr[0] * 1) > answer) {
      answer = Math.abs(copyArr[0] * 1);
    }
  }
  return answer;
}
