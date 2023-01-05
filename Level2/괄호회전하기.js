const s = "[](){}";

function check(newArr) {
  const checkArr = [];
  newArr.forEach((item) => {
    const lastIndex = checkArr.length - 1;

    checkArr.push(item);
    if (item === ")" && checkArr[lastIndex] === "(") {
      checkArr.pop();
      checkArr.pop();
    }
    if (item === "}" && checkArr[lastIndex] === "{") {
      checkArr.pop();
      checkArr.pop();
    }
    if (item === "]" && checkArr[lastIndex] === "[") {
      checkArr.pop();
      checkArr.pop();
    }

    console.log(checkArr);
  });
  return checkArr;
}

function spin(arr) {
  const newArr = [];
  const arrLength = arr.length;

  for (let i = 0; i < arr.length; i++) {
    const checkArr = [];
    for (let j = 0; j < arr.length; j++) {
      checkArr.push(arr[(j + i) % arrLength]);
    }
    newArr.push(checkArr);
  }
  return newArr;
}

function solution(s) {
  const arr = s.split(``);
  let count = 0;
  const newArr = spin(arr);

  newArr.forEach((arr) => {
    const checkArr = check(arr);
    console.log(checkArr);
    if (checkArr.length === 0) {
      count = count + 1;
    }
  });

  return count;
}
solution(s);
