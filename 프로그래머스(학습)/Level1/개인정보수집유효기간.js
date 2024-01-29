function solution(today, terms, privacies) {
  //개인정보 N개
  // 모든 달은 28일까지있다.
  // 결국 달수이다.
  // 년 월 일로 나눌수 있으면 나누는게 베스트네

  // 일 수는 그대로구먼
  const answer = [];
  let [year, month, day] = today.split(`.`).map((item) => Number(item));
  let obj = {};
  terms.forEach((term) => {
    let [type, during] = term.split(` `);
    obj[type] = Number(during);
  });

  privacies.forEach((privacy, index) => {
    const [start, type] = privacy.split(` `);
    const during = obj[type];
    // 기간은나옴

    const [startYear, startMonth, startDay] = start
      .split(`.`)
      .map((item) => Number(item));
    let endMonth = (startMonth + during) % 12;
    let endYear = startYear + Math.floor((startMonth + during) / 12);
    if (endMonth === 0) {
      endMonth = 12;
      if (startMonth + during === 12) {
        endYear = startYear;
      } else {
        endYear--;
      }
    }

    if (year > endYear) {
      answer.push(index + 1);
    } else if (year === endYear && endMonth < month) {
      answer.push(index + 1);
    } else if (
      year === endYear &&
      endMonth === month &&
      (day > startDay || day === startDay)
    ) {
      answer.push(index + 1);
    }
  });

  return answer;
}
