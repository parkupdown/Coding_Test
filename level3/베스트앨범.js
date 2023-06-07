function solution(genres, plays) {
  const answer = [];
  let totalPlays = new Map();

  genres.forEach((music, index) => {
    if (totalPlays.get(music) === undefined) {
      totalPlays.set(music, plays[index]);
    } else if (totalPlays.get(music) !== undefined) {
      totalPlays.set(music, totalPlays.get(music) + plays[index]);
    }
  });
  // Hash를 이용해 key-value 형태로 묶어둠

  totalPlays = [...totalPlays].sort((a, b) => b[1] - a[1]);
  // 가장 많은 재생을 한 장르를 간추릴 수 있음

  //이제 각 장르별 play 횟수가 많은 index를 answer에 저장할 수 있어야한다.

  for (let i = 0; i < totalPlays.length; i++) {
    const genrePlay = genres
      .map((item, index) => (item === totalPlays[i][0] ? plays[index] : null))
      .filter((item) => item !== null)
      .sort((a, b) => b - a);

    for (let j = 0; j < genrePlay.length; j++) {
      if (j === 2) {
        break;
      }
      answer.push(plays.indexOf(genrePlay[j]));
    }
  }
  return answer;
}
