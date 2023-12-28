function solution(want, number, discount) {
  let answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    const NumberArr = number.map((item) => item);
    for (let j = i; j < i + 10; j++) {
      const itemIndex = want.indexOf(discount[j]);
      if (itemIndex !== -1 && NumberArr[itemIndex] !== 0) {
        NumberArr[itemIndex] = NumberArr[itemIndex] - 1;
      }
    }
    const count = NumberArr.filter((item) => item !== 0).length;
    if (count === 0) {
      answer = answer + 1;
    }
  }

  return answer;
}
