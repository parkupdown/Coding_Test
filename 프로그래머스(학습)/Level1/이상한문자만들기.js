// index를 기억하는방법도있다.
const s = "try hello world";

function solution(s) {
  let answer = [];
  const arr = [...s].map((item) => item.toLowerCase()).join("");
  const arr2 = arr.split(" ");
  const arr3 = arr2.map((item, index) =>
    [...item].map((item, index) => {
      return index % 2 === 0 ? item.toUpperCase() : item;
    })
  );
  arr3.forEach((item, index) => {
    item.forEach((item, index) => {
      answer.push(item);
    });
    if (index !== arr3.length - 1) {
      answer.push(" ");
    }
  });
  return answer.join("");
}
solution(s);
