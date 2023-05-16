let book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];

function solution(book_time) {
  const visited = Array.from({ length: book_time.length }, () => false);
  //방문자기록

  // 수 비교를 위해 number타입으로
  book_time = book_time.map((item) =>
    item.map((item2) => item2.split(`:`).join(``) * 1)
  );

  const RF = (i) => {
    //0번 인데스보다 1번인덱스가 더 큰 경우 같은 방을 사용한다.
    for (let j = 0; j < book_time[1].length; j++) {
      if (
        i !== j &&
        visited[i] === false &&
        visited[j] === false &&
        book_time[i][0] <= book_time[j][1]
      ) {
        visited[i] = true;
        visited[j] = true;
        // 둘다 방문한것

        RF(i);
      }
    }
    for (let i = 0; i < book_time.length; i++) {
      RF(i);
    }
  };

  /*
  let fastIn = [...book_time].sort((a, b) => a[0] - b[0]);
  let fastOut = [...book_time].sort((a, b) => a[1] - b[1]);
  // 이렇게 복사하면 원본변경에 영향을 주지 않는다.
  */

  console.log(fastIn, fastOut);
}
solution(book_time);
