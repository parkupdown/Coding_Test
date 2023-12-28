function solution(gems) {
  const gemsList = [...new Set([...gems])];
  const stack = [];
  let gemsIndex = [];
  if (gemsList.length === 1) {
    return [1, 1];
  }
  // 보석이 한가지만있는경우

  for (let i = 0; i < gems.length; i++) {
    if (!stack.includes(gems[i])) {
      stack.push(gems[i]);
      gemsIndex[gemsList.indexOf(gems[i])] = i;
      // gemsIndex에 gemsList에서 가장 최신의 index정보를 가져옴
    } else if (stack.includes(gems[i])) {
      gemsIndex[gemsList.indexOf(gems[i])] = i;
    }

    if (gemsIndex.length === gemsList.length) {
      //그때의 i를 배열에서 삭제
      gemsIndex.splice(i, 1);
    }
  }

  return [min, max];
}
// 이렇게 하면  ABBCDABC일 경우 오류가 발생함 정답은 DABC가 맞는데 위 로직은 ABBCD를 뽑아냄
let gems = ["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"];

function solution(gems) {
  const gemsList = [...new Set([...gems])];
  const gemsIndex = Array.from({ length: gemsList.length }, () => -1);
  let answer = [];
  for (let i = 0; i < gems.length; i++) {
    const gemsListIndex = gemsList.indexOf(gems[i]);

    gemsIndex[gemsListIndex] = i;

    if (!gemsIndex.includes(-1)) {
      //같을 때
      const max = Math.max(...gemsIndex);
      const min = Math.min(...gemsIndex);
      const minIndex = gemsIndex.indexOf(min);
      answer.push([min, max]);
      gemsIndex[minIndex] = -1;
    }
  }

  answer = answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  answer = answer[0];

  return [answer[0] + 1, answer[1] + 1];
}
solution(gems);

function solution(gems) {
  const gemsList = [...new Set([...gems])];
  const gemsIndex = Array.from({ length: gemsList.length }, () => -1);
  let answer = [];
  for (let i = 0; i < gems.length; i++) {
    const gemsListIndex = gemsList.indexOf(gems[i]);
    gemsIndex[gemsListIndex] = i;

    if (!gemsIndex.includes(-1)) {
      //같을 때
      const max = Math.max(...gemsIndex);
      const min = Math.min(...gemsIndex);
      const minIndex = gemsIndex.indexOf(min);
      answer.push([min, max]);
      gemsIndex[minIndex] = -1;
    }
  }

  answer = answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  answer = answer[0];

  return [answer[0] + 1, answer[1] + 1];
}

function solution(gems) {
  const gemsList = [...new Set([...gems])];
  const answer = [];
  let gemsSaved = new Map();

  for (let i = 0; i < gems.length; i++) {
    gemsSaved.set(gems[i], i);
    //hash로 저장

    const gemsSavedArr = [...gemsSaved];
    if (gemsSavedArr.length === gemsList.length) {
      gemsSavedArr.sort((a, b) => a[1] - b[1]);
      const gemsSavedArrMax = gemsSavedArr[gemsSavedArr.length - 1][1];
      const gemsSavedArrMin = gemsSavedArr[0][1];
      answer.push([gemsSavedArrMin, gemsSavedArrMax]);

      const gemsSavedArrMinKey = gemsSavedArr[0][0];

      delete gemsSavedArrMinKey;
    }
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  return [answer[0][0] + 1, answer[0][1] + 1];
}

function solution(gems) {
  // hash로 먼저 만들고
  // 그 인덱스를 기준으로 start와 end를 지정해서 push, shift를 이용해
  // 해를 구하기
  const answer = [];
  const gemsArr = [...new Set(gems)];
  let gemsHash = new Map();
  // hash만듦
  for (let i = 0; i < gems.length; i++) {
    if ([...gemsHash].length === gemsArr.length) {
      break;
    }
    gemsHash.set(gems[i], i);
  }
  gemsHash = [...gemsHash].sort((a, b) => a[1] - b[1]);

  let start = gemsHash[0][1] + 1;
  let end = gemsHash[gemsHash.length - 1][1];
  let target = gemsHash[0][1];
  answer.push(start, end + 1);
  while (end < gems.length) {
    console.log(end, start, target);
    end = end + 1;
    if (gems[end] === target) {
      answer.push([start, end]);
      target = start;
      start = start + 1;
    }
  }

  return answer;
}
solution(gems);

function solution(gems) {
  const gemsKindNum = [...new Set(gems)].length;
  const gemsList = new Map();
  const answer = [];
  for (let i = 0; i < gems.length; i++) {
    gemsList.delete(gems[i]);
    // delete해주는 이유는 새로운 gems를 업데이트하기위해
    gemsList.set(gems[i], i);

    if (gemsList.size === gemsKindNum) {
      answer.push([gemsList.values().next().value + 1, i + 1]);
    }
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  return [answer[0][0], answer[0][1]];
}
