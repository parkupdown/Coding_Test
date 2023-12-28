let nums = [3, 1, 2, 3];

function solution(nums) {
  const halfOfNums = nums.length / 2;
  // 고를 수 있는 포켓몬 수
  const numsArray = [...new Set(nums)].length;
  // 포켓몬 종류
  if (numsArray >= halfOfNums) {
    return halfOfNums;
  }
  return numsArray;
}
solution(nums);
