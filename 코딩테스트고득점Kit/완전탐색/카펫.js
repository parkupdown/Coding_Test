function solution(brown, yellow) {
  // 노란색과 갈색의 개수는 기억하지만
  // 전체 카펫의 크기는 기억못함
  // 가로가 세로보다 크거나 같다
  // yellow 모양에 따라 brown의 배치가 달라진다.

  //yellow의 모양은 완전탐색으로 알아볼 수 있다.

  // 소수를 구하는 방법과 같다.

  // 절반까지만 구해

  const check = (num) => {
    const arr = [[num, 1]];
    const sero = [];
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        if (sero.includes(num / i)) {
          break;
        }
        arr.push([num / i, i]);
        sero.push(i);
        // 가로 세로길이를 저장
      }
    }
    return arr;
  };

  const yellowArr = check(yellow);

  for (let i = 0; i < yellowArr.length; i++) {
    let garo = yellowArr[i][0];
    let sero = yellowArr[i][1];

    const brownSum = garo * 2 + sero * 2 + 4;

    if (brown === brownSum) {
      return [garo + 2, sero + 2];
    }
  }
}
