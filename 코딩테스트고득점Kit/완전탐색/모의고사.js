function solution(answers) {
  // 배열을 증가시키고
  // 비교하면됨

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const oneLength = one.length;
  const twoLength = two.length;
  const threeLength = three.length;

  let hash = new Map();

  hash.set(1, 0);
  hash.set(2, 0);
  hash.set(3, 0);

  for (let i = 0; i < answers.length; i++) {
    if (one[i % oneLength] === answers[i]) {
      hash.set(1, hash.get(1) + 1);
    }
    if (two[i % twoLength] === answers[i]) {
      hash.set(2, hash.get(2) + 1);
    }
    if (three[i % threeLength] === answers[i]) {
      hash.set(3, hash.get(3) + 1);
    }
  }
  hash = [...hash].sort((a, b) => b[1] - a[1]);

  const max = hash[0][1];
  const answer = [];
  for (let j = 0; j < hash.length; j++) {
    if (hash[j][1] !== max) {
      break;
    }
    answer.push(hash[j][0]);
  }
  answer.sort((a, b) => a - b);

  return answer;
}
