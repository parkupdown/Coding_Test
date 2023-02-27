const citations = [7, 7, 7, 7, 3];

function solution(citations) {
  const arrLength = citations.length;

  for (let i = arrLength; i > 0; i -= 1) {
    let biggerCount = 0;
    for (let j = 0; j < arrLength; j++) {
      if (i <= citations[j]) {
        biggerCount = biggerCount + 1;
      }
    }
    if (biggerCount >= i && arrLength - biggerCount <= i) {
      return i;
    }
    if (biggerCount === 0) {
      return 0;
    }
  }
}
solution(citations);
