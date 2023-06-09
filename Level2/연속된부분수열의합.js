function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let length = 123123123123;
  let answer = [];
  let sum = sequence[start];
  if (sum === k) {
    return [0];
  }
  while (sequence[start] <= k) {
    console.log(sum, start, end);
    if (sum === k) {
      if (end - start < length) {
        length = end - start;
        answer = [start, end];
      }
      start = start + 1;
      sum = sequence[start];
      end = start;
    } else if (sum > k || end === sequence.length) {
      start = start + 1;
      end = start;
      sum = sequence[start];
    } else {
      end = end + 1;
      sum = sum + sequence[end];
    }
    if (start === sequence.length) {
      return answer;
    }
  }
  return answer;
}
