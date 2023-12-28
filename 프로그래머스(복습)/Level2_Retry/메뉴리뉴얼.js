let orders = ["XYZ", "XWY", "WXA"];
let course = [2, 3, 4];

function solution(orders, course) {
  const answer = [];

  const dfs = (sum1, order, visited, courseLength, menu) => {
    if (sum1.length > courseLength) {
      return;
    }
    if (sum1.length === courseLength) {
      sum1 = sum1
        .split(``)
        .sort((a, b) => (a > b ? 1 : -1))
        .join(``);

      if (menu.get(sum1) !== undefined) {
        menu.set(sum1, menu.get(sum1) + 1);
      }

      if (menu.get(sum1) === undefined) {
        menu.set(sum1, 1);
      }
      return;
    }
    for (let i = 0; i < order.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;

        //순서 모두 생각
        dfs(sum1 + order[i], order, visited, courseLength, menu);
        visited[i] = false;
      }
    }
  };

  for (let j = 0; j < course.length; j++) {
    let menu = new Map();
    for (let i = 0; i < orders.length; i++) {
      let visited = Array.from({ length: orders[i].length }, () => false);

      dfs(``, orders[i], visited, course[j], menu);
      //각각 단어에 한정
    }

    menu = [...menu];
    menu.sort((a, b) => b[1] - a[1]);
    menu = menu.filter((item) => item[1] === menu[0][1]);
    console.log(menu);
    menu.forEach((item) => {
      if (item[1] >= 2) {
        answer.push(item[0]);
      }
    });
    //이제 중복에 대해 정리해주면 끝
    arr = [];
  }
  answer.sort((a, b) => (a > b ? 1 : -1));
}
solution(orders, course);
