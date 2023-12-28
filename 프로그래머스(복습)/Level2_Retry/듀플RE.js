let s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

function solution(s) {
  let answer = [];
  s = s.slice(2, s.length - 2);
  s = s
    .split(`},{`)
    .map((item) => item.split(`,`))
    .sort((a, b) => a.length - b.length);

  s.forEach((arr) =>
    arr.forEach((item) => {
      if (!answer.includes(item)) {
        answer.push(item);
      }
    })
  );

  answer = answer.map((item) => parseInt(item));

  return answer;
}
solution(s);
