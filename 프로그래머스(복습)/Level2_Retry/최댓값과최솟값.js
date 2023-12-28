const s = "1 2 3 4";

function solution(s) {
  const arr = s.split(` `).sort((a, b) => b - a);

  const lastIndex = arr.length - 1;

  return `${arr[lastIndex]} ${arr[0]}`;
}
solution(s);

// 참고한 타 코드

function solution(s) {
  const arr = s.split(``);

  return Math.min(...arr) + ` ` + Math.max(...arr);
}
//Math.min, Math.max는 string에서도 사용이 가능하다.
console.log(Math.min("1", "2", "3", "4"));
