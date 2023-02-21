const n = 78;

function solution(n) {
  const oneCount = n
    .toString(2)
    .split(``)
    .filter((item) => item === "1").length;

  for (let i = n + 1; i < 1000000; i++) {
    if (
      i
        .toString(2)
        .split(``)
        .filter((item) => item === "1").length === oneCount
    ) {
      return i;
    }
  }
}

solution(n);
