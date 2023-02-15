let str1 = "aa1+aa2";
let str2 = "AAAA12";
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

  nonDupliArr1.forEach((item) => {
    if (nonDupliArr2.includes(item)) {
      intersectionCount = intersectionCount + 1;
    }
  });
  console.log(intersectionCount);
  if (intersectionCount === 0) {
    return 65536;
  }

  const unionCount = [...new Set([...nonDupliArr1, ...nonDupliArr2])].length;
  console.log(unionCount);
  return Math.floor((intersectionCount / unionCount) * 65536);
}
solution(str1, str2);
