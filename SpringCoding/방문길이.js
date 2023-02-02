const dirs = "LULLLLLLU";

//처음 간 거리를 찾기
function solution(dirs) {
  const arr = dirs.split(``);
  const traceArr = [];

  let RL = 0;
  let UD = 0;
  arr.forEach((item) => {
    const walkArr = [];
    if (item === "R") {
      RL = RL + 1;
    }
    if (item === "L") {
      RL = RL - 1;
    }
    if (item === "U") {
      UD = UD + 1;
    }
    if (item === "D") {
      UD = UD - 1;
    }

    walkArr.push(RL, UD);
    traceArr.push(walkArr);
  });

  const setArr = [...new Set(traceArr.join("|").split("|"))].map((item) =>
    item.split(`,`)
  );
  console.log(setArr);
}
solution(dirs);
