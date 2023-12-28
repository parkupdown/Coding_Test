let brown = 24;
let yellow = 24;

function solution(brown, yellow) {
  //yellow를 나눌 수 있는 경우 모두 생각
  const side = [];
  const updown = [];

  let num = 1;

  while (num < yellow) {
    if (yellow % num === 0) {
      if (side.includes(yellow / num)) {
        break;
      }
      side.push(num);
      // 가로저장
      updown.push(yellow / num);
      //세로저장
    }
    num = num + 1;
  }

  for (let i = 0; i < side.length; i++) {
    if ((updown[i] + 2) * (side[i] + 2) === yellow + brown) {
      return [updown[i] + 2, side[i] + 2];
    }
  }
}
solution(brown, yellow);
