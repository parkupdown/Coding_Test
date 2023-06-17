function solution(p) {
  const answer = [];

  const isRight = (u) => {
    const target = u.split(``);
    const stack = [];
    if (u[0] === ")") {
      return false;
    }

    for (let i = 0; i < u.length; i++) {
      if (target[i] === ")" && stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(target[i]);
      }
    }
    return stack.length === 0 ? true : false;
  };
  // 올바른 괄호인지 판단하는 함수

  //u와 v로 나누는 함수
  const divide = (p, check) => {
    let left = 0;
    let right = 0;
    for (let i = 0; i < p.length; i++) {
      p[i] === "(" ? left++ : right++;

      if (left === right) {
        const u = p.slice(0, i + 1);
        const v = p.slice(i + 1);
        //v가 없으면 return이 되는게 기본
        if (isRight(u)) {
          if (check) {
            answer.push(u);
            divide(v, true);
          } else if (!check) {
            answer.push("(" + u + ")");
          }
        } else if (!isRight(u)) {
          divide(v, false);
          if (u.length === 2) {
            answer.push("()");
          } else {
            console.log(u);
            const changedU = u
              .slice(1, u.length - 1)
              .split(``)
              .map((item) => (item === ")" ? "(" : ")"))
              .join(``);
            console.log(changedU);
            answer.push(changedU);
          }
          if (v === undefined) {
            return;
          }
        }

        // 이거는 이제 3번에 해당해 그냥 u를 answer 에 넣고 다시돌리면돼
        break;
      }
    }
  };

  divide(p, true);

  return answer.join(``);
}

/*function solution(p) {
  // 먼저 나눌 수 있어야함 p를 계속 쪼개는데
  // 해쉬를 사용하자
  // "("와 ")"의 갯수가 같을 때 p는 나누어지고 u와 v로 나누어짐
  // 그때 u를 가져와서 올바른 즉, 순서를 따져준다.
  // 순서까지 맞다면? answer에 push
  // 순서까진 아니면? "(" 추가 후 다시 v의 결과를 추가하여 ")" 닫고 u의 첫번째 마지막
  // 제거 후 순서바꿔서 다시 string등록
  // v를 살펴보자 => 다시 해쉬를 사용해서 나누기
  // 남은 v를 계속 나누다가
  const answer = [];

  const checkPerfect = (target) => {
    const targetArr = target.split(``);
    if (targetArr[0] === ")") {
      return false;
    }
    const stack = [];
    for (let i = 0; i < targetArr.length; i++) {
      if (targetArr[i] === "(") {
        stack.push("(");
      } else if (targetArr[i] === ")") {
        stack.pop();
      }
    }
    stack.length === 0 ? true : false;
  };

  const divide = (p, checkPerfect) => {
    let left = 0;
    let right = 0;
    let u;
    let v;

    for (let i = 0; i < p.length; i++) {
      p[i] === "(" ? left++ : right++;

      if (left === right) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1);
        // 이제 이 u가 올바른 건지 알아봐야함
        if (checkPerfect(u)) {
          answer.push(u);
          p = v;
          return u;
        } else if (!checkPerfect(u)) {
          let sum = "(" + divide(v) + ")";
          //u의 첫 번째와 마지막 문자 제거
          u = u.slice(1, u.length);
          u = u.split(``).reverse().join(``);
          sum = u + sum;
        }
        break;
      }
    }
  };
  divide(p, checkPerfect);
  console.log(answer);
}

let p = "))((())()(()())(";

function solution(p) {
  const answer = [];

  const checkPerfect = (u) => {
    const uList = u.split(``);
    const stack = [];
    if (uList[0] === ")") {
      return false;
    }
    for (let i = 0; i < uList.length; i++) {
      if (uList[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(uList[i]);
      }
    }
    return stack.length === 0 ? true : false;
  };

  let u;
  let v;

  const divide = (p) => {
    let left = 0;
    let right = 0;
    for (let i = 0; i < p.length; i++) {
      p[i] === "(" ? left++ : right++;
      if (left === right) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1);

        return [u, v];
      }
    }
    return [p, ``];
  };

  let P = p;

  while (true) {
    let [u, v] = divide(P);
    if (checkPerfect(u) && checkPerfect(v)) {
      if (answer.length === 0) {
        return P;
      }
      return answer.join(``);
    }
    if (checkPerfect(u)) {
      answer.push(u);
      P = v;
    } else if (!checkPerfect(u)) {
      let sum = "(" + divide(v)[0] + ")";

      //u의 앞뒤문자를 제거 ?
      console.log(u);
      u = u
        .slice(1, u.length - 1)
        .split(``)
        .map((item) => (item === ")" ? "(" : ")"))
        .join(``);
      console.log(u);
      sum = sum + u;
      answer.push(sum);
      P = v;
    }
  }
}
solution(p);

function solution(p) {
  const answer = [];
  const checkPerfect = (u) => {
    let U = u.split(``);
    let stack = [];
    if (U[0] === ")") {
      return false;
    }
    for (let i = 0; i < U.length; i++) {
      if (U[i] === ")" && stack[stack.length - 1] === "(") {
        U.pop();
      } else {
        stack.push(U[i]);
      }
    }
    stack.length === 0 ? true : false;
  };

  let P = p;
  let u;
  let v;
  const divide = (sum, P) => {
    let left = 0;
    let right = 0;

    for (let i = 0; i < P.length; i++) {
      P[i] === "(" ? left++ : right++;
      if (left === right) {
        u = P.slice(0, i + 1);
        v = P.slice(i + 1);
      }
      const UU = u
        .split(``)
        .map((item) => (item === "(" ? ")" : "("))
        .join(``);

      divide(sum + UU, v);
      if (checkPerfect(v)) {
        return;
      }
    }
  };
}

function solution(p) {
  let answer;
  const checkPerfect = (u) => {
    let U = u.split(``);
    let stack = [];
    if (U[0] === ")") {
      return false;
    }
    for (let i = 0; i < U.length; i++) {
      if (U[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(U[i]);
      }
    }
    return stack.length === 0 ? true : false;
  };

  const divide = (sum, p) => {
    if (p.length === 0) {
      answer = sum;
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < p.length; i++) {
      p[i] === "(" ? left++ : right++;
      if (left === right) {
        let u = p.slice(0, i + 1);
        let v = p.slice(i + 1);

        if (checkPerfect(u) && v === ``) {
          answer = sum + u;
          return;
        }
        if (checkPerfect(u)) {
          divide(sum + u, v);
        } else if (!checkPerfect(u)) {
          const UU =
            "(" +
            u
              .slice(1, u.length - 1)
              .split(``)
              .map((item) => (item === "(" ? ")" : "("))
              .join(``) +
            ")";
          //v를 재귀적으로 수행한 결과를 문자열에 이어붙여야함
          divide(sum + UU, v);
          //나눈걸 더해야해서 그런가?
        }

        break;
      }
    }
  };

  divide(``, p);

  return answer;
}
// 나눈게 더해져야하는데 이는 그냥 UU 즉, u를 변환한 것이 더해짐

function solution(p) {
  const answer = [];
  const checkPerfect = (u) => {
    let U = u.split(``);
    let stack = [];
    if (U[0] === ")") {
      return false;
    }
    for (let i = 0; i < U.length; i++) {
      if (U[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(U[i]);
      }
    }
    return stack.length === 0 ? true : false;
  };

  const divide = (w, check) => {
    let left = 0;
    let right = 0;

    for (let i = 0; i < w.length; i++) {
      w[i] === ")" ? right++ : left++;
      if (right === left) {
        // 이때는 이제 나누어져야할 시간
        const u = w.slice(0, i + 1);
        const v = w.slice(i + 1);

        //올바른 괄호 문자열일 경우
        //u에 이어 붙여서 반환한다.
        //v에 대해 수행한 결과를 다시 이어붙여야함

        if (!checkPerfect(u) && v === ``) {
          if (u.length === 2) {
            answer.push("()");
            return;
          }
          const UU = u
            .slice(1, u.length - 1)
            .split(``)
            .map((item) => (item === "(" ? ")" : "("))
            .join(``);
          answer.push(UU);
          return;
        }

        if (checkPerfect(u)) {
          //올바른 괄호 문자열일 경우
          //u에 더해 그리고 v는 또 나눠
          //이 때 answer에 그냥 넣어버리는 거지 u를
          if (check === false) {
            answer.push("(" + u + ")");
            divide(v, true);
          } else if (check === true) {
            answer.push(u);

            divide(v, true);
          }

          //그리고 v에 대해 다시 순환 시키는거야
        } else if (!checkPerfect(u)) {
          //만약 올바른 괄호가 아니라면?
          //v에 대해 재귀적으로 수행한 결과를 구해야함 이때
          // 도출한 결과에 "()"를 붙여준 후 u를 변환한걸 push해야한다. u를 그냥 변환해야겠네
          // 여기서 나온 u는 ))(( 이런식으로 생긴거니까 이거는 v를 변화시킨 결과 뒤에 붙여야하잖아 v를 먼저 변화하고 그 다음에 넣는거지
          divide(v, false);
          //여기서 이제 추가를 하면?? 위 경우를 추가하고 그 다음에 추가하는 게 되겠지
          const UU = u
            .slice(1, u.length - 1)
            .split(``)
            .map((item) => (item === "(" ? ")" : "("))
            .join(``);
          answer.push(UU);
        }
        break;
      }
    }
  };
  divide(p, true);

  return answer;
}
*/
