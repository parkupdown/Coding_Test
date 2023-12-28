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

function solution(genres, plays) {
  // 속한 노래가 많이 재생된 장르를 먼저 수록
  // => hash이용해서 할 수 있을듯

  // 장르 내에서 많이 재생된 노래를 먼저 수록
  // => 그리고 해당 장르에서 또 가장 많은거순서로
  // => 이건 이중for문으로 할 수 있을듯 가장 많이
  // 최대 2개
  // hash를 2번

  // 장르 내에서 재생횟수가 같아면 고유번호가 낮은(앞에있는거부터)수록
  const answer = [];
  let genreHash = new Map();

  for (let i = 0; i < genres.length; i++) {
    genreHash.get(genres[i]) === undefined
      ? genreHash.set(genres[i], plays[i])
      : genreHash.set(genres[i], genreHash.get(genres[i]) + plays[i]);
  }
  // 많은 장르찾기

  genreHash = [...genreHash].sort((a, b) => b[1] - a[1]);

  for (let k = 0; k < genreHash.length; k++) {
    const genre = genreHash[k][0];
    let playHash = new Map();
    for (let j = 0; j < genres.length; j++) {
      if (genres[j] === genre) {
        //만약 장르 종류가 우선순위 장르와 동일하고 아직 없다면 그때의 play횟수를 저장
        playHash.set(j, plays[j]);
      }
    }
    //여기서 이제 playHash를 다시 저장
    playHash = [...playHash].sort((a, b) => b[1] - a[1]);
    //만약 동일할경우
    answer.push(playHash[0][0]);
    if (playHash.length > 1) {
      answer.push(playHash[1][0]);
    }
  }

  return answer;
}
