const s = "-1000 123 12345";

function solution(s) {
  let answers = s.split(" ");
  const real = answers
    .map((item) => parseInt(item))
    .sort((a, b) => a - b)
    .filter((item, index) => index === 0 || index === answers.length - 1);
  const gogo = real.join(" ");
  return gogo;
}
solution(s);
