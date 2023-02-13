const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";

function solution(s) {
  const Arr = s.replace("{{", "").replace("}}", "").split("},{");
  const doubleArray = Arr.map((item) => item.split(",")).sort(
    (a, b) => a.length - b.length
  );

  const answerArr = [];

  doubleArray.forEach((arr) =>
    arr.forEach((item) => {
      if (answerArr.includes(item * 1) === false) {
        answerArr.push(item * 1);
      }
    })
  );
  return answerArr;
}

solution(s);
