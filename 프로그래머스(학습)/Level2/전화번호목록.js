function solution(phone_book) {
  // 연결되는 지점이있는지?
  // 맨앞에 존재하는지 한 번호가 다른 번호의 접두어인지
  // 포함만되면된다면

  phone_book.sort((a, b) => a.length - b.length);

  const hash = new Map();

  hash.set(phone_book[0], true);

  for (let i = 1; i < phone_book.length; i++) {
    for (let j = 1; j <= phone_book[i].length; j++) {
      const sliced = phone_book[i].slice(0, j);
      if (hash.has(sliced)) {
        return false;
      }
    }
    //여기서 이제 또 저장
    hash.set(phone_book[i], true);
  }
  return true;
}
