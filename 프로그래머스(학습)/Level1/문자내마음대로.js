const strings = ["abce", "abcd", "cdx"];
const n = 1;
function solution(strings, n) {
  strings.sort().sort((a, b) => {
    const aa = a.charAt(n);
    const bb = b.charAt(n);

    return (aa > bb) - (aa < bb); //오름차순
  });
  return strings;
}
solution(strings, n);

//두가지의방법으로할수있다.

/*const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let answers = [];
  //먼저 같은게있는지확인을하자
  const string = strings.sort(); //같은경우를 미리대비하여 정렬해버리고
  alpha.forEach(function (item) {
    string.forEach(function (item2) {
      if (item === [...item2][n]) {
        answers.push(item2); //알파벳이 먼저 기준이돼서 해당하면 먼저넣기
      }
    });
    // ([...item][n]);
  });
  return answers;
}
solution(strings, n);
//해결*/
