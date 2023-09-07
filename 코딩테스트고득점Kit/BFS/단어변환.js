function solution(begin, target, words) {
  // words를 순회하면서 있으면 그걸 queue에 담아야지
  const visited = Array.from({ length: words.length }, () => false);

  const check = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count = count + 1;
      }
    }
    return count === 1 ? true : false;
  };

  const queue = [begin];

  let count = 0;

  while (queue.length > 0) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift();
      for (let j = 0; j < words.length; j++) {
        if (check(current, words[j]) && !visited[j]) {
          //check에 통과되고 아직 방문하지 않았다면
          visited[j] = true;
          queue.push(words[j]);
          if (words[j] === target) {
            return count + 1;
          }
        }
      }
    }
    count = count + 1;
  }

  return 0;
}
