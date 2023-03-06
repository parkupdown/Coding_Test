const str1 = "handshake";
const str2 = "shake hands";

function solution(str1, str2) {
  let STR1 = str1.toUpperCase().split("");
  let STR2 = str2.toUpperCase().split("");
  let count = 0;
  let sum1 = "";
  let sum2 = "";
  for (let i = 0, j = 0; i < STR1.length; i++) {
    sum1 = sum1 + STR1[i];
    if (count === 1) {
      STR1[j] = sum1;
      j = j + 1;
      count = 0;
    }
    sum1 = STR1[i];
    count = count + 1;
  }
  count = 0;
  for (let i = 0, j = 0; i < STR2.length; i++) {
    sum2 = sum2 + STR2[i];
    if (count === 1) {
      STR2[j] = sum2;
      j = j + 1;
      count = 0;
    }
    sum2 = STR2[i];
    count = count + 1;
  }

  const reg = /^[A-Za-z]*$/;
  STR1 = STR1.filter((item) => item.length === 2 && reg.test(item));
  STR2 = STR2.filter((item) => item.length === 2 && reg.test(item));
  // 2개씩 자르기 완성
  console.log(STR1, STR2);

  //교집합과 합집합을 구하면된다.
  const Hap = [...new Set([...STR1, ...STR2])].length;
  let Gyo = STR1.filter((item) => STR2.includes(item));
  Gyo = [...new Set(Gyo)].length;

  if (Gyo === 0) {
    return 65536;
  }

  return Math.floor((Gyo / Hap) * 65536);
}
solution(str1, str2);
