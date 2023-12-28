const n = 3;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];

function solution(n, words) {
  const check = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }

    if (check.includes(words[i])) {
      return [(i % n) + 1, Math.ceil((i + 1) / n)];
    }
    const checkLastIndex = check.length - 1;

    check.push(words[i]);

    if (i > 0) {
      if (
        check[checkLastIndex].charAt(check[checkLastIndex].length - 1) !==
        words[i].charAt(0)
      ) {
        return [(i % n) + 1, Math.ceil((i + 1) / n)];
      }
    }
  }
  return [0, 0];
}
solution(n, words);
