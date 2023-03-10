const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

function solution(maps) {
  const bfs = (maps, position) => {
    const checked = [];
    const willCheck = [];

    willCheck.push(maps, position);

    while (willCheck.length !== 0) {
      const node = willCheck.shift();
      if (!checked.includes(node)) {
        checked.push(node);
        willCheck.push(maps);
      }
    }
  };
}
