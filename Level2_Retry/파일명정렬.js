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
    if (slice !== ``) {
      arr.push(slice);
    }
    answer = [...answer, arr];
  }

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

/*let files = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];

function solution(files) {
  let answer = [];
  for (let i = 0; i < files.length; i++) {
    let arr = [];
    let HeadAndTail = "";
    let Number = "";
    for (let j = 0; j < files[i].length; j++) {
      if (Number.length === 5) {
        arr.push(Number);
        arr.push(files[i].substr(j));
        break;
      }

      if (isNaN(files[i][j] * 1) || files[i][j] === ` `) {
        HeadAndTail = HeadAndTail + files[i][j];
      } else if (!isNaN(files[i][j] * 1) || files[i][j] !== ` `) {
        Number = Number + files[i][j];
        HeadAndTail !== `` ? arr.push(HeadAndTail) : (HeadAndTail = ``);
        HeadAndTail = ``;
      }
    }
    if (Number.length !== 5) {
      arr.push(Number);
    }
    if (HeadAndTail !== ``) {
      arr.push(HeadAndTail);
    }
    answer.push(arr);
  }

  answer = answer
    .sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      } else {
        return Number(a[1]) - Number(b[1]);
      }
    })
    .map((item) => item.join(``));

  return answer;
}
solution(files);
*/
/* 
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

*/
