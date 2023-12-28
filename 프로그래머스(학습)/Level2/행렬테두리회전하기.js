function solution(rows, columns, queries) {
  const answer = [];
  // 먼저 가장 큰 행과 열을 찾는다.
  // 그 후 사각형을 형성한다.
  // 이 때 그 사각형에 맞는 배열을 만든다.
  // 그 후 quries 데이터에 따라 배열을 조절하면 된다.
  // 여기서 부터는 그냥 논리적으로 반복문을 조절하면됨
  let maxRow = 0;
  let maxCol = 0;

  queries.forEach((item) => {
    if (item[2] > maxRow) {
      maxRow = item[2];
    }
    if (item[3] > maxCol) {
      maxCol = item[3];
    }
  });

  const arr = [];
  let count = 1;

  for (let i = 0; i < maxRow; i++) {
    const colArr = [];
    for (let j = 0; j < maxCol; j++) {
      colArr.push(count);
      count = count + 1;
    }
    arr.push(colArr);
  }
  // 배열은 만듦

  for (let k = 0; k < queries.length; k++) {
    let minimum = 10000;
    const startRow = queries[k][0];
    const startCol = queries[k][1];
    const endRow = queries[k][2];
    const endCol = queries[k][3];

    let standingRow = startRow;
    let standingCol = startCol + 1;

    arr[standingRow][standingCol] = arr[startRow][startCol];

    if (arr[standingRow][standingCol + 1] < minimum) {
      minimum = arr[standingRow][standingCol + 1];
    }

    while (true) {
      if (standingRow === startRow && standingCol === startCol) {
        break;
      }
      if (standingRow < endRow && standingCol < endCol) {
        arr[standingRow][standingCol + 1] = arr[standingRow][standingCol];
        standingCol = standingCol + 1;
      } else if (standingRow < endRow && standingCol === endCol) {
        arr[standingRow + 1][standingCol] = arr[standingRow][standingCol];
        standingRow = standingRow + 1;
      } else if (standingRow === endRow && standingCol === endCol) {
        arr[standingRow][standingCol - 1] = arr[standingRow][standingCol];
        standingCol = standingCol - 1;
      } else if (standingRow === endRow && standingCol === startCol) {
        arr[standingRow - 1][standingCol] = arr[standingRow][standingCol];
        standingRow = standingRow - 1;
      }

      if (arr[standingRow][standingCol] < minimum) {
        minimum = arr[standingRow][standingCol];
      }
    }
    answer.push(minimum);
  }
  return answer;
}
