const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  const arr3 = arr1.map((item, index) => {
    item.map((item2, index2) => {
      return item2 + arr2[index][index2];
    });
  });
  return arr3;
}
solution(arr1, arr2);
