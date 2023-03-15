let files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01",
  "img2",
];

function solution(files) {
  let answer = [];
  let check = true;
  for (let i = 0; i < files.length; i++) {
    const arr = [];
    let slice = files[i][0];
    for (let j = 1; j < files[i].length; j++) {
      if (check !== isNaN(+files[i][j])) {
        arr.push(slice);
        slice = ``;
      }
      check = isNaN(+files[i][j]);
      slice = slice + files[i][j];
    }
    arr.push(slice);
    answer = [...answer, arr];
  }
  console.log(answer);

  // file 각 head, number, tail로 나눔
  //answer.sort((a, b) => Number(a[1]) - Number(b[1]));

  // 0번 인덱스는 비교완
  answer.sort((a, b) => {
    if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1;
    } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    } else {
      return Number(a[1]) - Number(b[1]);
    }
  });

  // 같은애들을 묶자

  answer = answer.map((item) => item.join(``));
  return answer;
}
solution(files);
