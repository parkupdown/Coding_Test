function solution(name) {
  const alpabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let makeName = Array.from({ length: name.length }, () => "A").join(``);

  // 이동거리랑 생각해서 가장 최소인것
  // 앞 뒤 거리를 생각해서
  // 가정1 첫글자부터 포커싱이 된다.
  let current = "A";
  let currentJoy = 0;

  while (name !== makeName) {
    let sum = 9999;
    let fixCurrent;
    let fixCurrentJoy;
    for (let i = 0; i < name.length; i++) {
      const target = name[i];
      const targetIndexP = alpabet.indexOf(target) - alpabet.indexOf(current);
      const targetIndexM =
        26 - alpabet.indexOf(target) + alpabet.indexOf(current);
      const distance = Math.min(targetIndexP, targetIndexM);
      const joystickDistance = Math.abs(currentJoy - i);

      if (distance + joystickDistance < sum) {
        fixCurrent = target;
        fixCurrentJoy = i;
        sum = distance + joystickDistance;
      }
    }
    current = fixCurrent;
    currentJoy = fixCurrentJoy;
    makeName[currentJoy] = current;
  }
}
// 그리디 알고리즘 시도 실패

function solution(name) {
  const visited = name.split(``).map((item) => (item === "A" ? true : false));
  const alpabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let answer = 99999;
  const dfs = (sum, index) => {
    if (visited.includes(false) === false) {
      if (answer > sum) {
        answer = sum;
      }
      return;
    }

    for (let i = 0; i < name.length; i++) {
      if (!visited[i]) {
        //차이를 찾아
        const target = name[i];
        const distanceP = alpabet.indexOf(target);
        const distanceM = 26 - distanceP;
        const distance = Math.min(distanceP, distanceM);
        const indexDistanceP = Math.abs(i - index);
        const indexDistanceM = Math.abs(visited.length - i + index);
        const indexDistance = Math.min(indexDistanceP, indexDistanceM);
        visited[i] = true;
        dfs(sum + distance + indexDistance, i);
        visited[i] = false;
      }
    }
  };

  dfs(0, 0);
  return answer;
}
// dfs 74점
