let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

function solution(s) {
  const checkArr = [];
  let S = s
    .slice(2, s.length - 2)
    .split(`},{`)
    .map((item) => item.split(`,`))
    .sort((a, b) => a.length - b.length);

  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S[i].length; j++) {
      if (checkArr.includes(parseInt(S[i][j])) === false) {
        checkArr.push(parseInt(S[i][j]));
      }
    }
  }
  return checkArr;
}
solution(s);
