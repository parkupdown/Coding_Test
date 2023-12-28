function solution(phone_book) {
  // 같은 전화번호 중복 x

  // 2,3,4

  // 각각 경우를 모두 잘라서 저장하고 있으면 return

  // 앞에만큼자르기
  const slicedArr = [];

  phone_book.sort((a, b) => a.length - b.length);

  phone_book.forEach((num) => {
    if (!slicedArr.includes(num.length)) {
      slicedArr.push(num.length);
    }
  });

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < slicedArr.length; j++) {
      if (phone_book[i].length > slicedArr[j]) {
        const sliced = phone_book[i].slice(0, slicedArr[j]);
        if (phone_book.includes(sliced)) {
          return false;
        }
      }
    }
  }
  return true;
}
// 95점
