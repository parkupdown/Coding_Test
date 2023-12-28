let dirs = "ULURRDLLU";

function solution(dirs) {
  let xPosition = 0;
  let yPosition = 0;
  let xArr = [];
  let yArr = [];
  const answer = [];
  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "U" && yPosition < 5) {
      yPosition = yPosition + 1;
      xArr.push(xPosition);
      yArr.push(yPosition);
      continue;
    }
    if (dirs[i] === "D" && yPosition > -5) {
      yPosition = yPosition - 1;
      xArr.push(xPosition);
      yArr.push(yPosition);
      continue;
    }
    if (dirs[i] === "R" && xPosition < 5) {
      xPosition = xPosition + 1;
      xArr.push(xPosition);
      yArr.push(yPosition);
      continue;
    }
    if (dirs[i] === "L" && xPosition > -5) {
      xPosition = xPosition - 1;
      xArr.push(xPosition);
      yArr.push(yPosition);
      continue;
    }
  }

  for (let i = 0; i < xArr.length; i++) {
    answer[i] = String(xArr[i]) + String(yArr[i]);
  }
  console.log(answer);
  const answerArr = [...new Set(answer)];

  return answerArr.length === answer.length
    ? answerArr.length
    : answerArr.length + 1;
}
solution(dirs);

/**
function solution(dirs) {
  const answer = [];
  let position = "00";
  //split 배열 [0] +1 나머지는 return 그리고 다시 join
  for (let i = 0; i < dirs.length; i++) {
    console.log(position);
    if (dirs[i] === "U" && position[0] * 1 < 5) {
      position = position
        .split(``)
        .map((item, index) =>
          index === 0 ? parseInt(item) + 1 : parseInt(item)
        )
        .join(``);
      continue;
    }
    if (dirs[i] === "D" && position[0] * 1 > -5) {
      position = position
        .split(``)
        .map((item, index) =>
          index === 0 ? parseInt(item) - 1 : parseInt(item)
        )
        .join(``);
      continue;
    }
    if (dirs[i] === "R" && position[1] * 1 < 5) {
      position = position
        .split(``)
        .map((item, index) =>
          index === 1 ? parseInt(item) + 1 : parseInt(item)
        )
        .join(``);
      continue;
    }
    if (dirs[i] === "L" && position[1] * 1 > -5) {
      position = position
        .split(``)
        .map((item, index) =>
          index === 1 ? parseInt(item) - 1 : parseInt(item)
        )
        .join(``);
      continue;
    }
  }

  return answer;
}
solution(dirs);

 */
