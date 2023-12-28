let str1 = "abab";
let str2 = "baba";
function solution(str1, str2) {
  const LowerStr1 = str1.toLowerCase();
  const LowerStr2 = str2.toLowerCase();

  const LowerArr1 = [];
  const LowerArr2 = [];
  for (let i = 0; i < LowerStr1.length - 1; i++) {
    LowerArr1.push(LowerStr1.substr(i, 2));
  }
  for (let i = 0; i < LowerStr2.length - 1; i++) {
    LowerArr2.push(LowerStr2.substr(i, 2));
  }

  const regex = /^[a-z|A-Z]+$/;

  const filteredArr1 = LowerArr1.filter((item) => regex.test(item) === true);
  const filteredArr2 = LowerArr2.filter((item) => regex.test(item) === true);

  // 합집합의 개념을 잘생각해야함

  let intersectionCount = 0;

  if (filteredArr1.length > filteredArr2.length) {
    filteredArr2.forEach((item) => {
      if (filteredArr1.includes(item)) {
        intersectionCount = intersectionCount + 1;
      }
    });
  }

  if (filteredArr2.length >= filteredArr1.length) {
    filteredArr1.forEach((item) => {
      if (filteredArr2.includes(item)) {
        intersectionCount = intersectionCount + 1;
      }
    });
  }

  console.log(intersectionCount);
  if (intersectionCount === 0) {
    return 65536;
  }

  const unionCount =
    filteredArr1.length + filteredArr2.length - intersectionCount;

  return Math.floor((intersectionCount / unionCount) * 65536);
}
solution(str1, str2);
