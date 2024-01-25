function solution(r1, r2) {
  const doubleR1 = Math.pow(r1, 2);
  const doubleR2 = Math.pow(r2, 2);
  let answer = 0;
  for (let i = 1; i <= r2; i++) {
    const Big = Math.sqrt(doubleR2 - Math.pow(i, 2));
    let Small = Math.sqrt(doubleR1 - Math.pow(i, 2));
    //각각 x의 이동하며 그때의 y값이 나옴
    if (isNaN(Small)) {
      Small = 0;
    }
    answer = answer + (Math.floor(Big) - Math.ceil(Small) + 1) * 4;
  }

  return answer;
}
// 통과
