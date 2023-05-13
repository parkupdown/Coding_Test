let K = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

function solution(K, tangerine) {
  let orangeSize = new Map();

  tangerine.forEach((item) => {
    if (orangeSize.get(item) === undefined) {
      orangeSize.set(item, 1);
    } else {
      orangeSize.set(item, orangeSize.get(item) + 1);
    }
  });
  orangeSize = [...orangeSize].sort((a, b) => b[1] - a[1]);

  let count = 0;

  while (true) {
    if (K <= 0) {
      return count;
    }

    K = K - orangeSize[count][1];

    count = count + 1;
  }
}
solution(K, tangerine);
