const s = "3people unFollowed me";
function solution(s) {
  let count = 1;
  let A = [...s]
    .map((item) => item.toLowerCase())
    .map((item) => {
      if (isNaN(item * 1) !== true) {
        count = 0;
      }
      if (item === " ") {
        count = 1;
      }
      if (count === 1 && isNaN(item * 1) === true) {
        count = 0;
        return item.toUpperCase();
      } else {
        return item;
      }
    });

  return A.join("");
}
solution(s);

/*

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
} 타인의 좋은 아이디어
/*



//"3People Unfollowed Me"
//"3people Unfollowed Me"

/*const s = "3people    unFollowed me";
function solution(s) {
  let A = s.split(" ").filter((item) => item !== "")
  let B = A.map((item) => [...item]).map((item) =>
    item.map((item) => item.toLowerCase())
  );
  for (i = 0; i < A.length; i++) {
    for (j = 0; j < B[i].length; j++) {
      if (isNaN(B[i][j] * 1) === true) {
        B[i][j] = B[i][j].toUpperCase();
        break;
      }
    }
  }
  console.log(A);
  console.log(B);
}
solution(s);*/
