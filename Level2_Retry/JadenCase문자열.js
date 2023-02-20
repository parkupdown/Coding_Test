//내가 푼 문제 (실패)
const s = "3people   unFollowed me";

function solution(s) {
  const arr = s
    .toLowerCase()
    .split(` `)
    .map((item) => {
      if (item === ``) {
        return item;
      }
      return item
        .split()
        .map((charset, index) => {
          const check = /^[a-zA-Z]+$/;
          console.log(charset);
          return check.test(charset) === false && index === 0
            ? charset
            : charset.toUpperCase();
        })
        .join(``);
    });

  return arr;
}
solution(s);

// 내가 본 문제
const S = "3people   unFollowed me";

const arr = S.split(` `)
  .map((item) =>
    item === ""
      ? item
      : item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
  )
  .join(` `);
console.log(arr);
