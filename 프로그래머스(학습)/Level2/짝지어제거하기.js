const s = "baababa";

function solution(s) {
  const arr = s.split(``);
  const answer = [];

  arr.forEach((item) => {
    const lastIndex = answer.length - 1;
    answer[lastIndex] === item ? answer.pop() : answer.push(item);
  });

  if (answer.length === 0) {
    return 1;
  }
  return 0;
}

solution(s);

//
