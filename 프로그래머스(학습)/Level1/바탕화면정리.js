function solution(wallpaper) {
  // 드래기를 어떻게 해야 가장 적게 할 수 있을지

  // X에서 최대값
  // Y에서 최댓값 아닌가?

  // 최소최소 + 최대최대

  // 파일위치를 먼저찾아
  const xLocation = [];
  const yLocation = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        xLocation.push(i);
        yLocation.push(j);
      }
    }
  }
  // 최대는 +1씩해주어야함
  const minX = Math.min(...xLocation);
  const maxX = Math.max(...xLocation);
  const minY = Math.min(...yLocation);
  const maxY = Math.max(...yLocation);

  return [minX, minY, maxX + 1, maxY + 1];
}
