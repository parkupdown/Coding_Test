function solution(s) {
  const zip = (string, unit) => {
    const stack = [];
    const countArr = [];

    for (let i = 0; i <= string.length - unit; i += unit) {
      const result = string.slice(i, i + unit);

      if (stack[stack.length - 1] === result) {
        countArr[countArr.length - 1] = countArr[countArr.length - 1] + 1;
      }
      if (stack[stack.length - 1] !== result) {
        stack.push(result);
        countArr.push(1);
      }
      //남은 길이도 추가해주어야함
    }

    return [stack, countArr];
  };
  let answer = 99999;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let sLength = s.length;
    const [stack, countArr] = zip(s, i);

    // 비교되지 못한 나머지도 추가해주어야함
    // 그냥 2,3개면 길이에서 -
    for (let j = 0; j < countArr.length; j++) {
      if (countArr[j] > 1) {
        //1보다 크면?
        sLength = 1 + sLength - (countArr[j] - 1) * i;
      }
      if (sLength < answer) {
        answer = sLength;
      }
    }
  }
  return answer;
}

function solution(s) {
  // 문자열로 잘라서 압축하는 문제
  // 핵심은 단위만큼 잘라서 남은 문자열을 합쳐야함
  //aabbaccc=> 한칸씩자르면서
  // ababcdcdababcdcd
  // unit별로 잘랐을 때 남는 게 문제가됨
  const cut = (s, unit) => {
    let sum = [];
    let countArr = [];
    let count = 0;
    let rest = s.length - Math.floor(s.length / unit) * unit;
    for (let i = 0; i <= s.length - unit; i += unit) {
      const sliced = s.slice(i, i + unit);
      if (sum[sum.length - 1] === sliced) {
        countArr[countArr.length - 1] = countArr[countArr.length - 1] + 1;
      } else if (sum[sum.length - 1] !== sliced) {
        countArr.push(1);
        sum.push(sliced);
      }
    }
    //여기서 한번 더 더해주어야한다.

    if (rest !== 0) {
      if (sum[sum.length - 1] === rest) {
        countArr[countArr.length - 1] = countArr[countArr.length - 1] + 1;
      } else if (sum[sum.length - 1] !== rest) {
        countArr.push(1);
        sum.push(s.slice(-rest, s.length));
      }
    }

    return [sum, countArr];
  };
  let answer = 99999;

  for (let i = 1; i <= Math.ceil(s.length / 2); i++) {
    const [sum, countArr] = cut(s, i);
    let result = ``;
    for (let j = 0; j < sum.length; j++) {
      countArr[j] === 1
        ? (result = result + sum[j])
        : (result = result + countArr[j] + sum[j]);
    }

    result = result.length;

    if (answer > result) {
      answer = result;
    }
  }

  return answer;
}
//성공
