function solution(sizes) {
  sizes = sizes.map((sizeArr) => sizeArr.sort((a, b) => a - b));
  const first = sizes.map((item) => item[0]);
  const second = sizes.map((item) => item[1]);
  // 각각을 정렬한 다음 작은 것 중 최대값 큰 것중 최대값을 구해서 그 둘을 곱한게 답이다.

  const MaxFirst = Math.max(...first);
  const MaxSecond = Math.max(...second);

  return MaxFirst * MaxSecond;
}
