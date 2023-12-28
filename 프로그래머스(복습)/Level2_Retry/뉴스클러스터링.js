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

function solution(str1, str2) {
  //교집합의 크기를
  // 합집합의 크기로 나눈 값
  // 공집합이면 1

  // 교집합은 있는거 내에서 겹치는거
  // 합집합도 있는거 내에서 합쳐버려

  // 영문자만 유효
  // 영문자가 아닌게 섞이면 그건 버린다.

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // 일단 2개씩 자르기
  const regex = /^[a-z]+$/;

  const str1Arr = [];
  const str2Arr = [];
  for (let i = 0; i < str1.length - 1; i++) {
    const sum = str1[i] + str1[i + 1];
    if (regex.test(sum)) {
      str1Arr.push(sum);
    }
  }
  for (let j = 0; j < str2.length - 1; j++) {
    const sum = str2[j] + str2[j + 1];
    if (regex.test(sum)) {
      str2Arr.push(sum);
    }
  }
  str1 = str1Arr;
  str2 = str2Arr;
  //이제 교집합, 합집합찾기
  if (str1.length === 0 && str2.length === 0) {
    return 65536;
  }

  // 두개 배열을 동일선상에놓고
  // 교집합만 구하면되네
  // 하나를 대상으로 다른 거랑 비교하면서 삭제하면됨 같은거 있으면 ?
  // 삭제보단 stack 이용해서
  const findGyo = (str1, str2) => {
    const result = [];
    for (let i = 0; i < str1.length; i++) {
      const str2Index = str2.indexOf(str1[i]);
      if (str2Index !== -1) {
        result.push(str1[i]);
        str2.splice(str2Index, 1);
      }
    }
    return result;
  };
  const copyStr1 = [...str1];
  const copyStr2 = [...str2];

  let gyo = findGyo(copyStr1, copyStr2);
  let hap = [...str1, ...str2];

  const gyoCopy = [...gyo];
  const findHap = (gyo, hap) => {
    for (let i = 0; i < hap.length; i++) {
      const gyoIndex = gyo.indexOf(hap[i]);
      if (gyoIndex !== -1) {
        gyo.splice(gyoIndex, 1);
        hap.splice(i, 1);
      }
    }
  };
  findHap(gyoCopy, hap);

  gyo = gyo.length;
  hap = hap.length;

  if (hap === 0) {
    return 65536;
  }
  const answer = Math.floor((gyo / hap) * 65536);

  return answer;
}
//성공
