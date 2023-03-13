let land = [
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];

function solution(land) {
  let answer;
  for (let i = 1; i < land.length; i++) {
    land[i][0] =
      land[i][0] + Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] =
      land[i][1] + Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] =
      land[i][2] + Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] =
      land[i][3] + Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }
  answer = land[land.length - 1];

  return Math.max([...answer]);
}

solution(land);
/*
function solution(land) {
  let answer = 0;
  let target;
  for (let i = 0; i < land.length; i++) {
    let Max = Math.max(...land[i]);
    let MaxIndex = land[i].indexOf(Max);
    let MaxLastIndex = land[i].lastIndexOf(Max);

    if (MaxIndex !== MaxLastIndex) {
      target = -1;
      answer = answer + Max;
      continue;
    }
    if (MaxIndex === target) {
      land[i].splice(MaxIndex, 1, 0);
      Max = Math.max(...land[i]);
      MaxIndex = land[i].indexOf(Max);
    }

    target = MaxIndex;
    answer = answer + Max;
  }
  return answer > 100 ? 100 : answer;
}
solution(land);
*/
