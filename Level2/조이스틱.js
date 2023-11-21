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

function solution(name) {
  // 초기에 AAA 이런식으로 결정된다.
  // 처음 focusing은 0 인덱스로향해있다.

  // 만약 name => JAZ 라면 AAA

  // 그럼 그냥 결국 어디를 먼저 바꿔주는게 이득인지 또 오른쪽 왼쪽가는경우를 모두 다르게 생각해주어야한다.

  // 0 인덱스에서 +1 하는경우 -1 하는경우 모두 다르게 계산을 해주어야한다.

  // 즉 아래의 코드와같다.
  let answer = 99999;
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
  // index가 음수라면 name.length+index로 넣어주면된다.
  const dfs = (sum, index) => {
    if (visited.includes(false) === false) {
      if (answer > sum) {
        answer = sum;
      }
      return;
    }
    for (let i = 0; i < name.length; i++) {
      let right = (index + i) % name.length;
      let left = (index - i + name.length) % name.length;

      //rigth left모두 visited를 확인해야한다.
      if (!visited[right]) {
        const upDistance = alpabet.indexOf(name[i]);
        const downDistance = 26 - alpabet.indexOf(name[i]);
        const distance = Math.min(upDistance, downDistance);
        visited[right] = true;
        dfs(sum + distance + i, right);
        visited[right] = false;
      }
      if (!visited[left]) {
        const upDistance = alpabet.indexOf(name[i]);
        const downDistance = 26 - alpabet.indexOf(name[i]);
        const distance = Math.min(upDistance, downDistance);
        visited[left] = true;
        dfs(sum + distance + i, left);
        visited[left] = false;
      }
    }
  };
  dfs(0, 0);

  return answer;
}

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
  let answer = 99999;
  const visited = name.split(``).map((item) => (item === "A" ? true : false));
  const dfs = (sum, index) => {
    if (!visited.includes(false)) {
      if (answer > sum) {
        answer = sum;
      }
      return;
    }
    for (let i = 0; i < name.length; i++) {
      if (!visited[i]) {
        // 여기까지 어떻게 갈꺼냐
        // index값은 초기에 0일테니까
        // 오른쪽으로 간 경우는 어떻게?
        const indexArr = [i, index];
        indexArr.sort((a, b) => a - b);
        const right = indexArr[1] - indexArr[0];
        const left = indexArr[0] + name.length - indexArr[1];
        const targetIndex = alpabet.indexOf(name[i]);

        // 올려야하는지 내려야하는지를 보자 이건 그냥 빠른거하는게 좋아
        const distanceP = Math.abs(targetIndex);
        const distanceM = Math.abs(26 - targetIndex);
        const distance = Math.min(distanceP, distanceM);
        visited[i] = true;
        dfs(sum + right + distance, i);
        dfs(sum + left + distance, i);
        visited[i] = false;
      }
    }
  };
  dfs(0, 0);
  return answer;
}
//97점
//dfs 로 해결
