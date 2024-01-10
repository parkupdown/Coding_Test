function solution(cards1, cards2, goal) {
  // 카드는 무조건사용
  // 한번 사용한 카드는 다시 사용못함

  // 만들수있는지없는지

  // cards1, cards2가 서로 다른단어만 가지고 있음

  for (let i = 0; i < goal.length; i++) {
    const target = goal[i];
    if (cards1.length > 0 && cards1[0] === target) {
      cards1.shift();
    } else if (cards2.length > 0 && cards2[0] === target) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
