let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [800, 600, 150, 800, 2500];
function solution(genres, plays) {
  const answer = [];

  let genresMap = new Map();
  genres.forEach((item, index) => {
    if (genresMap.get(item) !== undefined) {
      genresMap.set(item, genresMap.get(item) + plays[index]);
    }
    if (genresMap.get(item) === undefined) {
      genresMap.set(item, plays[index]);
    }
  });
  genresMap = [...genresMap].sort((a, b) => b[1] - a[1]);
  // 여기서 많은 들은 장르를 알 수 있다.
  // genresMap의 장르를 기준으로 반복문을 돌려야한다.

  for (let i = 0; i < genresMap.length; i++) {
    const arr = [];
    for (let j = 0; j < genres.length; j++) {
      if (genres[j] === genresMap[i][0]) {
        arr.push(plays[j]);
      }
    }
    arr.sort((a, b) => b - a);

    for (let k = 0; k < 2; k++) {
      if (arr[k] === undefined) {
        break;
      }
      answer.push(plays.indexOf(arr[k]));
      plays.splice(plays.indexOf(arr[k]), 1, null);
    }
  }

  return answer;
}
