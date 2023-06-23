function solution(genres, plays) {
  const answer = [];

  let list = new Map();

  for (let i = 0; i < genres.length; i++) {
    const get = list.get(genres[i]);

    if (get === undefined) {
      list.set(genres[i], [plays[i]]);
    } else {
      list.set(
        genres[i],
        [...get, plays[i]].sort((a, b) => b - a)
      );
    }
  }
  list = [...list];

  for (let k = 0; k < list.length; k++) {
    const sum = list[k][1].reduce((acc, cur) => acc + cur);
    list[k].push(sum);
  }

  list.sort((a, b) => b[2] - a[2]);

  list = list.map((arr) =>
    arr.map((item, index) => {
      if (index === 1) {
        return item.filter((item2, index) => index < 2);
      }
      return item;
    })
  );

  for (let n = 0; n < list.length; n++) {
    for (let m = 0; m < list[n][1].length; m++) {
      for (let z = 0; z < plays.length; z++) {
        if (genres[z] === list[n][0] && plays[z] === list[n][1][m]) {
          answer.push(z);
          plays.splice(z, 1, 0);
          break;
        }
      }
    }
  }

  return answer;
}
