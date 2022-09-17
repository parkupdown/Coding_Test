const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

function solution(survey, choices) {
  const argsurvey = survey.map((item) => [...item].sort().join(""));
  const argchoices = choices
    .map((item) => (item === 4 ? 0 : item - 4))
    .map((item, index) => {
      return survey[index] !== argsurvey[index] ? item * -1 : item;
    });
  let count = 0;
  let answers = [];
  argsurvey.forEach((item, index) => {
    item === "RT" ? (count = count + argchoices[index]) : null;
  });
  count <= 0 ? answers.push("R") : answers.push("T");
  count = 0;
  argsurvey.forEach((item, index) => {
    item === "CF" ? (count = count + argchoices[index]) : null;
  });
  count <= 0 ? answers.push("C") : answers.push("F");
  count = 0;
  argsurvey.forEach((item, index) => {
    item === "JM" ? (count = count + argchoices[index]) : null;
  });
  count <= 0 ? answers.push("J") : answers.push("M");
  count = 0;
  argsurvey.forEach((item, index) => {
    item === "AN" ? (count = count + argchoices[index]) : null;
  });
  count <= 0 ? answers.push("A") : answers.push("N");
  return answers.join("");
}
solution(survey, choices);
//해결
