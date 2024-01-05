function solution(park, routes) {
  // 로봇 강아지 산책 ㄷㄷ

  // [E 5]

  // S가 시작
  const maxX = park.length;
  const maxY = park[0].length;

  let start;
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        start = [i, j];
        break;
      }
    }
  }
  let [x, y] = start;

  routes = routes.map((route) => route.split(` `));

  // 장애물을 지나는거 자체로도 안됨

  for (let i = 0; i < routes.length; i++) {
    let [dir, step] = routes[i];
    let nx = x;
    let ny = y;

    while (step > 0) {
      cosnole.log("asd");
      if (dir === "E") {
        ny = ny + 1;
      } else if (dir === "W") {
        ny = ny - 1;
      } else if (dir === "N") {
        nx = nx - 1;
      } else if (dir === "S") {
        nx = nx + 1;
      }
      if (
        nx < 0 ||
        ny < 0 ||
        nx === maxX ||
        ny === maxY ||
        park[nx][ny] === "X"
      ) {
        break;
      }
      console.log(nx, ny, step);
      if (step === 1) {
        x = nx;
        y = ny;
      }
      step = step - 1;
    }
  }

  return [x, y];
}
