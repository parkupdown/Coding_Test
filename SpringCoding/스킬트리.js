const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECD", "BDA", "ASD", "ASF"];
function solution(skill, skill_trees) {
  const skillArr = skill.split(``);

  let count = 0;

  // CBD만 남기도록 아니면 다빼버리게
  const onlySkill = skill_trees.map((skillTree) =>
    skillTree
      .split(``)
      .filter((item) => skill.includes(item))
      .join(``)
  );

  // 길이가 0이아니고 [0]이 C가 아니면 탈락
  // 길이가 0이아니면 무조건 skillArr[0]이 있어야함
  onlySkill.forEach((item) => {
    if (item[0] === skillArr[0] && skill.match(item) !== null) {
      count = count + 1;
    }
    if (item === "") {
      count = count + 1;
    }
  });
  return count;
}
solution(skill, skill_trees);
