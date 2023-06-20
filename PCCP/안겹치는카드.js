// 문제를 가져올 수 없어 기억으로 다시 문제를 복기해보기
// 이 카드를 순차적으로 고르는데 최대한 뽑는 카드에서 안겹치게 내가 갖는거다 카드를 각 n 번의 회수 만큼 뽑는다
// 뽑았을 때 내가 가지고 있는 카드와 비교했을 때 가지고있는 카드의 개수 만큼 점수가 + 된다.

let cards = [
  [1, 3, 2, 4, 5],
  [1, 2, 2, 4, 5],
  [2, 3, 4, 1, 2],
  [4, 2, 6, 3, 2],
  [4, 2, 3, 5, 1],
];
// 배열에서 하나씩 고른다고 생각을 해보자
// 분리해서 생각
// 하나씩골라
// 그리고 또 하나씩골라
// 또 하나씩골라
// 그거를

function solution(cards) {
  const visited = [];
  cards.forEach((item) => {
    const visitedArr = Array.from({ length: item.length }, () => false);
    visited.push(visitedArr);
  });

  const dfs = (sum) => {
    console.log(sum);
    if (sum.length === cards.length) {
      return;
    }
    for (let i = 0; i < cards[0].length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (!visited[i][j]) {
          visited[i][j] = true;
          dfs(sum + cards[j][i]);
        }
      }
    }
  };
  dfs(``);
}
solution(cards);

function solution(cards) {
  const dfs = (sum, index1, index2) => {
    console.log(sum);
    if (
      index1 === cards.length - 1 ||
      index2 === cards[0].length ||
      sum.length === cards.length - 1
    ) {
      return;
    }

    dfs(sum + cards[index1][index2], index1 + 1, index2);
    dfs(sum + cards[index1][index2], index1, index2 + 1);
  };
  dfs(``, 0, 0);
}
solution(cards);

function solution() {
  let numArr = [1, 2, 3, 4];
  let visited = Array.from({ length: numArr.length }, () => false);
  const dfs = (sum) => {
    if (sum.length === 4) {
      return;
    }

    for (let i = 0; i < numArr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(sum + numArr[i]);
        visited[i] = false;
      }
    }
  };
  dfs("");
}
solution();

function solution(cards) {
  const visited = [];

  cards.forEach((item) => {
    const arr = Array.from({ length: item.length }, () => false);
    visited.push(arr);
  });

  // 한꺼번에 연결되어야함

  const dfs = (sum, index1, index2) => {
    console.log(index1, index2);
    if (sum.length === cards.length) {
      console.log(sum);
      return;
    }

    dfs(sum + cards[index1][index2], index1 + 1, index2);
    //이렇게 하면 index+1이 우선적으로 더해짐
    dfs(sum + cards[index1][index2], index1, index2 + 1);
  };
  dfs("", 0, 0);
}
solution(cards);

const answer = [];
const seq = (choice, depth) => {
  if (depth === cards.length) {
    answer.push(choice);
  } else {
    for (let i = 0; i < cards[depth].length; i++) {
      seq(choice + cards[depth][i], depth + 1);
    }
  }
};

seq("", 0);
console.log(answer);
