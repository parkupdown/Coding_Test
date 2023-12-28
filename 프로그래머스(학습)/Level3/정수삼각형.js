function solution(triangle) {
  // 정수삼각형

  // 그니까 내려가면서 계속 그려나가는거지

  for (let i = 0; i < triangle.length - 1; i++) {
    let arr = Array.from({ length: i + 2 }, () => 0);
    for (let j = 0; j < triangle[i].length; j++) {
      const a = triangle[i][j] + triangle[i + 1][j];
      const b = triangle[i][j] + triangle[i + 1][j + 1];

      if (a > arr[j]) {
        arr[j] = a;
      }
      if (b > arr[j + 1]) {
        arr[j + 1] = b;
      }
    }
    triangle[i + 1] = arr;
  }

  const lastLine = triangle[triangle.length - 1];

  return Math.max(...lastLine);
}
//96점

function solution(triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      const max = Math.max(triangle[i][j], triangle[i][j + 1]);
      triangle[i - 1][j] += max;
    }
  }

  return triangle[0][0];
}
// bottom-up =>100점통과

//bottom-up 방식은 for문으로
//top-down 방식은 재귀로 문제를 해결할 수 있다.
