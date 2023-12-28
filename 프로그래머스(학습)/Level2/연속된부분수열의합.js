function solution(sequence, k) {
  let start = 0;
  let end = start;
  let sum = sequence[start];
  let answer = [];
  while (end < sequence.length) {
    if (sum < k) {
      end = end + 1;
      sum = sum + sequence[end];
    }
    // sum이 k보다 작은경우
    else if (sum > k) {
      sum = sum - sequence[start];
      start = start + 1;
    }
    // sum이 k보다 큰 경우
    else if (sum === k) {
      answer.push([start, end]);
      sum = sum - sequence[start];
      start = start + 1;
    }
    // sum이 k와 같은경우
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}
//성공

/*
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
// 시간 초과1

function solution(sequence, k) {
  let start = 0;
  let end = 1;
  let sum = sequence[start];
  let answer = [];
  let length = 1000010;
  while (start < sequence.length) {
    if (sum >= k || end - 1 === sequence.length) {
      if (sum === k && length > end - 1 - start) {
        // 해를 찾았을 때
        answer = [start, end - 1];
        length = end - 1 - start;
      }
      start = start + 1;
      end = start + 1;
      sum = sequence[start];
    } else if (sum < k) {
      sum = sum + sequence[end];
      end = end + 1;
    }
  }
  return answer;
}
// 시간 초과2

   */
