const t = "3141592";
const p = "2";

function solution(t, p) {
  const tLength = t.length;
  const pLength = p.length;
  let count = 0;

  for (let i = 0; i < tLength - pLength + 1; i++) {
    const check = t.substr(i, pLength);
    if (check * 1 <= p * 1) {
      count = count + 1;
    }
  }
  return count;
}

solution(t, p);

//t가 나타내는 문자열
//p가 나타내는 문자열의 길이만큼 잘랐을 때 p보다 큰 수가 몇개인지 return
