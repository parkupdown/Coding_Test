function solution(s) {
  // abcdcba

  // 일단 두개의 반복문이 필요하다
  // 1. 문자열의 길이부터 한 계단씩 줄어드는 반복문'
  // 2. 문자열을 자른후 반전시켜이를 include하는지 확인하는 반복문
  const lastIndex = s.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    for (let j = 0; j + i < s.length; j++) {
      const sliced = s
        .slice(j, i + j + 1)
        .split(``)
        .reverse()
        .join(``);
      if (s.includes(sliced)) {
        return sliced.length;
      }
    }
  }
}
