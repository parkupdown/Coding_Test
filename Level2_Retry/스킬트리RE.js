let skill = "CBD";
let skill_trees = ["CED"];

function solution(skill, skill_trees) {
  const arr = skill_trees.map((item) => item.split(``));

  let answer = skill_trees.length;

  for (let i = 0; i < arr.length; i++) {
    const skillArr = skill.split(``);
    for (let j = 0; j < arr[i].length; j++) {
      if (skillArr.includes(arr[i][j]) && arr[i][j] !== skillArr[0]) {
        answer = answer - 1;
        break;
      }
      if (skillArr.includes(arr[i][j]) && arr[i][j] === skillArr[0]) {
        skillArr.shift();
      }
    }
  }
  return answer;
}
solution(skill, skill_trees);

/* for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i]);
      console.log(i, j);
      if (skillArr.includes(arr[i][j]) && arr[i][j] !== skillArr[0]) {
        answer = answer - 1;
        break;
      }
      if (skillArr.includes(arr[i][j]) && arr[i][j] === skillArr[0]) {
        skillArr.shift();
        break;
      }
    } */
