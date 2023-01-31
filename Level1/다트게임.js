const dartResult = "1S*2T*3S";

function findNum(dartResult) {
  const numArr = dartResult
    .split(``)
    .filter((item) => item !== "*" && item !== "#")
    .join(``)
    .split(/[S,D,T]/);

  return numArr;
}

function findAlpabet(dartResult) {
  const alpabetArr = [];
  dartResult.split(``).forEach((item) => {
    if (item === "S" || item === "D" || item === "T") {
      alpabetArr.push(item);
    }
  });
  return alpabetArr;
}

function findSpecial(dartResult) {
  const specialArr = dartResult
    .split(``)
    .filter((item) => item * 1 !== parseInt(item))
    .join(``)
    .split(/[S,D,T]/)
    .filter((item, index) => index !== 0);
  return specialArr;
}

function calculation(numArr, alpabetArr) {
  const calculationArr = [];
  alpabetArr.forEach((item, index) => {
    if (item === "S") {
      calculationArr.push(numArr[index] ** 1);
    }
    if (item === "D") {
      calculationArr.push(numArr[index] ** 2);
    }
    if (item === "T") {
      calculationArr.push(numArr[index] ** 3);
    }
  });
  return calculationArr;
}

function calculationMinus(specialArr, calculationArr) {
  const lastArr = specialArr.map((item, index) => {
    if (item === "#") {
      return calculationArr[index] * -1;
    }
    return calculationArr[index];
  });
  return lastArr;
}

function calculationSpecial(specialArr, first, second, third) {
  const answer = [];
  specialArr.forEach((item, index) => {
    if (item === "*" && index === 0) {
      first = first * 2;
    }
    if (item === "*" && index === 1) {
      first = first * 2;
      second = second * 2;
    }
    if (item === "*" && index === 2) {
      second = second * 2;
      third = third * 2;
    }
  });
  answer.push(first, second, third);
  return answer;
}

function solution(dartResult) {
  const numArr = findNum(dartResult);
  const alpabetArr = findAlpabet(dartResult);
  const specialArr = findSpecial(dartResult);
  const calculationArr = calculation(numArr, alpabetArr);
  let [first, second, third] = calculationMinus(specialArr, calculationArr);
  const answer = calculationSpecial(specialArr, first, second, third);

  let sum = answer[0] + answer[1] + answer[2];

  return sum;
}

solution(dartResult);
