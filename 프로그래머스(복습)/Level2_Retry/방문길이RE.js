let dirs = "RLLRUURRLD";

function solution(dirs) {
  let currentPosition = [0, 0];
  let answer = [];
  let count = 0;
  for (let i = 0; i < dirs.length; i++) {
    // 5,-5 넘는지를먼저체크해야한다.
    let livePosition = currentPosition.map((item) => item);

    if (dirs[i] === "U") {
      livePosition[1] = livePosition[1] + 1;
    }
    if (dirs[i] === "D") {
      livePosition[1] = livePosition[1] - 1;
    }
    if (dirs[i] === "R") {
      livePosition[0] = livePosition[0] + 1;
    }
    if (dirs[i] === "L") {
      livePosition[0] = livePosition[0] - 1;
    }

    const countPosition = livePosition.filter(
      (item) => item <= 5 && item >= -5
    ).length;

    if (countPosition === 2) {
      let userPosition = [...currentPosition, ...livePosition].join(``);
      let reverseUserPosition = [...livePosition, ...currentPosition].join(``);

      if (
        !answer.includes(userPosition) &&
        !answer.includes(reverseUserPosition)
      ) {
        answer.push(userPosition, reverseUserPosition);
        count = count + 1;
      }
      currentPosition = livePosition;
    }
  }

  return count;
}
solution(dirs);
