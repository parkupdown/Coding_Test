function solution(picks, minerals) {
  //곡괭이를 골라서 5개캐서버리고 다음 곡괭이
  //[dia,iron,stone]
  //여기에 따라 곡괭이를 골라서 해야함
  // 다이아몬드면 모두 1
  // 철이면 다이아몬드만 5 나머지는 1
  // 돌이면 다이아몬드 25 철 5 돌 1

  //5개씩 나눴을 때 점수를 주는 거
  //다이아몬드가 많으면 높은걸로
  //돌이많고 다이아가 없으면 낮은걸로?
  // 그냥 minerals를 순회하면 5개씩묶어버릴건데
  // 만약 그 점수를 매겨서 그 점수 대로 sort해서 앞에서부터 빼버리는거지
  //먼저 5개씩 나눈다.
  const mineralsArr = [];
  const mineralsDivide = Math.floor(minerals.length / 5);

  let index = 0;
  let count = 0;
  while (count < mineralsDivide) {
    const sliced = minerals.slice(index, index + 5);
    mineralsArr.push(sliced);
    index = index + 5;
    count++;
  }
  if (index !== minerals.length) {
    mineralsArr.push(minerals.slice(index));
  }

  console.log(mineralsArr);
}

let picks = [1, 0, 1];

let minerals = [
  "iron",
  "iron",
  "iron",
  "iron",
  "diamond",
  "diamond",
  "diamond",
];

function solution(picks, minerals) {
  // 5개씩 끊자
  const mArr = [];
  const divide = Math.floor(minerals.length / 5);

  let count = 0;
  let index = 0;

  while (count < divide) {
    const sliced = minerals.slice(index, index + 5);
    mArr.push(sliced);
    count++;
    index = index + 5;
  }

  if (index < minerals.length) {
    const sliced = minerals.slice(index);
    mArr.push(sliced);
  }

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < mArr[i].length; j++) {
      if (mArr[i][j] === "diamond") {
        sum = sum + 25;
      } else if (mArr[i][j] === "iron") {
        sum = sum + 5;
      } else if (mArr[i][j] === "stone") {
        sum = sum + 1;
      }
    }
    mArr[i].push(sum);
  }

  mArr.sort((a, b) => b[b.length - 1] - a[a.length - 1]);

  // 빡센 미네랄을 카운트하고 크기순으로 정렬함
  // 여기서 이제 picks을 통해 count하면됨
  // index 가 0 , 1, 2일때마다 각각 다르게 책정됨
  let answer = 0;
  let pIndex = 0;

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    if (picks[pIndex] === 0) {
      while (picks[pIndex] === 0) {
        pIndex = pIndex + 1;
      }
    }
    if (pIndex === 3) {
      break;
    }
    for (let j = 0; j < mArr[i].length - 1; j++) {
      if (pIndex === 0) {
        sum = sum + 1;
      } else if (pIndex === 1) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      } else if (pIndex === 2) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 25;
        } else if (mArr[i][j] === "iron") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      }
    }
    answer = answer + sum;
    picks[pIndex] = picks[pIndex] - 1;
  }

  return answer;
}
solution(picks, minerals);
//77점

function solution(picks, minerals) {
  // 5개씩 끊자
  const mArr = [];
  const divide = Math.floor(minerals.length / 5);

  let count = 0;
  let index = 0;
  let pickCount = 0;
  picks.forEach((item) => {
    pickCount = pickCount + item;
  });
  while (count < divide) {
    const sliced = minerals.slice(index, index + 5);
    mArr.push(sliced);
    count++;
    index = index + 5;
    if (mArr.length > pickCount) {
      break;
    }
  }

  if (index < minerals.length && mArr.length <= pickCount) {
    const sliced = minerals.slice(index);
    mArr.push(sliced);
  }

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < mArr[i].length; j++) {
      if (mArr[i][j] === "diamond") {
        sum = sum + 25;
      } else if (mArr[i][j] === "iron") {
        sum = sum + 5;
      } else if (mArr[i][j] === "stone") {
        sum = sum + 1;
      }
    }
    mArr[i].push(sum);
  }

  mArr.sort((a, b) => b[b.length - 1] - a[a.length - 1]);

  // 빡센 미네랄을 카운트하고 크기순으로 정렬함
  // 여기서 이제 picks을 통해 count하면됨
  // index 가 0 , 1, 2일때마다 각각 다르게 책정됨
  let answer = 0;
  let pIndex = 0;

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    if (picks[pIndex] === 0) {
      while (picks[pIndex] === 0) {
        pIndex = pIndex + 1;
      }
    }
    if (pIndex === 3) {
      break;
    }
    for (let j = 0; j < mArr[i].length - 1; j++) {
      if (pIndex === 0) {
        sum = sum + 1;
      } else if (pIndex === 1) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      } else if (pIndex === 2) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 25;
        } else if (mArr[i][j] === "iron") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      }
    }
    answer = answer + sum;
    picks[pIndex] = picks[pIndex] - 1;
  }

  return answer;
}
//97점

function solution(picks, minerals) {
  // 5개씩 끊자
  const mArr = [];
  const divide = Math.floor(minerals.length / 5);

  let count = 0;
  let index = 0;
  let pickCount = 0;
  picks.forEach((item) => {
    pickCount = pickCount + item;
  });
  while (count < divide) {
    const sliced = minerals.slice(index, index + 5);
    mArr.push(sliced);
    count++;
    index = index + 5;
    if (mArr.length >= pickCount) {
      break;
    }
  }

  if (index < minerals.length && mArr.length < pickCount) {
    const sliced = minerals.slice(index);
    mArr.push(sliced);
  }

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    for (let j = 0; j < mArr[i].length; j++) {
      if (mArr[i][j] === "diamond") {
        sum = sum + 25;
      } else if (mArr[i][j] === "iron") {
        sum = sum + 5;
      } else if (mArr[i][j] === "stone") {
        sum = sum + 1;
      }
    }
    mArr[i].push(sum);
  }

  mArr.sort((a, b) => b[b.length - 1] - a[a.length - 1]);

  // 빡센 미네랄을 카운트하고 크기순으로 정렬함
  // 여기서 이제 picks을 통해 count하면됨
  // index 가 0 , 1, 2일때마다 각각 다르게 책정됨
  let answer = 0;
  let pIndex = 0;

  for (let i = 0; i < mArr.length; i++) {
    let sum = 0;
    if (picks[pIndex] === 0) {
      while (picks[pIndex] === 0) {
        pIndex = pIndex + 1;
      }
    }
    if (pIndex === 3) {
      break;
    }
    for (let j = 0; j < mArr[i].length - 1; j++) {
      if (pIndex === 0) {
        sum = sum + 1;
      } else if (pIndex === 1) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      } else if (pIndex === 2) {
        if (mArr[i][j] === "diamond") {
          sum = sum + 25;
        } else if (mArr[i][j] === "iron") {
          sum = sum + 5;
        } else {
          sum = sum + 1;
        }
      }
    }
    answer = answer + sum;
    picks[pIndex] = picks[pIndex] - 1;
  }

  return answer;
}
//통과
