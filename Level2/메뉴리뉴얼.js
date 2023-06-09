function solution(orders, course) {
  const answer = [];
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      const visited = Array.from({ length: orders[i].length }, () => false);
      const dfs = (sum) => {
        if (sum.length === course[j]) {
          //원하는 sum이 나온 상태
          console.log(sum);
          return;
          //탈출조건
        }
        for (k = 0; k < orders[i].length; k++) {
          if (visited[k] === false) {
            visited[k] = true;
            dfs(sum + orders[i][k]);
            visited[k] = false;
          }
        }
      };

      dfs(``);
    }
  }

  return answer;
}
solution(orders, course);

/*
function solution(orders, course) {
  // 먼저 2중 포문으로 course에 따라 sum을 각각 만들도록 해야함
  const answer = [];
  for (let h = 0; h < orders.length; h++) {
    for (let i = 0; i < course.length; i++) {
      const visited = Array.from({ length: orders[i].length }, () => false);
      // visited 되는지 확인
      const dfs = (sum) => {
        console.log(sum);
        if (sum.length === course[i]) {
          let count = 0;
          console.log(sum);
          //이때 sum을 다른 것들과 비교해야함
          for (let j = 0; j < orders.length; j++) {
            let down = false;
            if (down) {
              break;
            }
            if (i !== j) {
              const sumArr = sum.split(``);
              for (let k = 0; k < sumArr.length; k++) {
                if (count === course[i] && !answer.includes(sum)) {
                  answer.push(sum);
                  down = true;
                  break;
                }
                if (orders[j].includes(sumArr[k])) {
                  count = count + 1;
                }
              }
            }
          }
          return;
        }
        for (let g = 0; g < orders[h]; g++) {
          if (visited[g] === false) {
            visited[g] = true;
            dfs(sum + item);
            visited[g] = false;
          }
        }

        //여기까지 dfs 함수 대괄호
      };
      dfs(``);
    }
  }

  return answer;
}
*/

let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];
function solution(orders, course) {
  const answer = [];
  let list = [];
  for (let i = 0; i < orders.length; i++) {
    const visited = Array.from({ length: orders[i].length }, () => false);

    const dfs = (sum, course) => {
      if (sum.length === course && !list.includes(sum)) {
        list.push(sum);
        const sumArr = sum.split(``);
        console.log(sumArr);
      }
      for (let j = 0; j < orders[i].length; j++) {
        if (visited[j] === false) {
          visited[j] = true;
          dfs(sum + orders[i][j], course);
          visited[j] = false;
        }
        // 중복으로 검사되는 문제가 발생함
      }
    };
    for (let k = 0; k < course.length; k++) {
      dfs(``, course[k]);
    }
  }

  //list안의 이제 비교하면댐

  return answer;
}
solution(orders, course);
