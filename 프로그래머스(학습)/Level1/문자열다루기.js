const s = "10e1";
function solution(s) {
  const eng = /[a - zA - Z]/;

  if (eng.test(s) === false) {
    if ([...s].length === 4 || [...s].length === 6) {
      return true;
    }
    return false;
  } else {
    [...s].forEach((item) => {
      if (item === "e") {
        return false;
      }
    });
    return false;
  }
}

solution(s); //e가 지수를 표시하기도함
//숫자만있는지 판단
