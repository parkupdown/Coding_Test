let m = 4;
let n = 5;
let board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

function Find(arr, n, m, deleteArr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (
        arr[i][j] === arr[i][j + 1] &&
        arr[i][j + 1] === arr[i + 1][j] &&
        arr[i + 1][j] === arr[i + 1][j + 1] &&
        arr[i][j] !== undefined
      ) {
        deleteArr.push([i, j]);
      }
    }
  }
  if (deleteArr.length === 0) {
    return true;
  }

  deleteArr.forEach((item) => {
    delete arr[item[0]][item[1]];
    delete arr[item[0]][item[1] + 1];
    delete arr[item[0] + 1][item[1]];
    delete arr[item[0] + 1][item[1] + 1];
  });
}

function solution(m, n, board) {
  let deleteArr = [];
  let count = 0;
  board = board
    .map((item) => item.split(``))
    .reduce(
      (result, row) => row.map((_, i) => [row[i], ...(result[i] || [])]),
      []
    );
  console.log(board);
  while (true) {
    Find(board, n, m, deleteArr);
    board = board.map((item) => item.filter((item2) => item2 !== undefined));
    deleteArr = [];
    if (Find(board, n, m, deleteArr) === true) {
      break;
    }
  }

  board.forEach((item) => (count = count + item.length));

  return m * n - count;

  //바꾸기 성공
}
solution(m, n, board);

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("123");
      resolve("성공");
    }, 3000);
  });
}
getData().then((data) => console.log(data));

function fetchData() {
  return new Promise((resolve, reject) => {
    const item = [1, 2, 3];
    resolve(item);
  });
}

async function PrintItem() {
  const item = await fetchData();
  console.log(item); //[1,2,3]
}
PrintItem();
