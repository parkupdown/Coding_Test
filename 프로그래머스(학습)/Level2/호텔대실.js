function solution(book_time) {
  //최소한의 객실만을 사용하여 예약 손님들을 받겠다.

  // 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소 후 다음 손님이 사용할 수 있다.

  // 일단 들어가는 시간을 기준으로 배열을 정렬

  // 끝나는 시간과 들어가는 시간의 차이가 10분보다 더 크다면 방은 그대로 사용

  // 분으로 바꾸는데 낫겠다.

  book_time = book_time.map((arr) =>
    arr.map(
      (item) =>
        item
          .split(`:`)
          .map((item2, index) => (index === 0 ? item2 * 60 : item2 * 1))
          .reduce((acc, cur) => acc + cur),
      1
    )
  );
  // 문자인 부분을 숫자로변경

  book_time.sort((a, b) => a[0] - b[0]);
  // 들어간 순서로 정렬

  const room = [];
  // 이곳에 이제 대실할 room이 들어간다.
  // 문자인걸 숫자로 변환해야하는데 이걸 먼저 수행할까

  for (let i = 0; i < book_time.length; i++) {
    //만약 들어간 시간보다 일찍 끝난 room이 있다면 해당 room은 다시 사용
    const [guestIn, guestOut] = book_time[i];

    let needToRoom = true;

    for (let j = 0; j < room.length; j++) {
      if (guestIn >= room[j] + 10) {
        room[j] = guestOut;
        needToRoom = false;
        break;
      }
    }
    if (needToRoom === true) {
      room.push(guestOut);
    }
  }
  return room.length;
}
// 해결
