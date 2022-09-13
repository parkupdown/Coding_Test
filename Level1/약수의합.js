const n = 12;

//먼저 약수들을 배열에 넣고 그걸 map해서 하는게 나을듯

//약수를 찾는방법은 반복문을 이용하여 나눴을 때 0 이면 약수

function solution(n) {
  let answers = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      answers.push(i);
    }
  }
  let realanswer = 0;
  const answer = answers.map((item) => {
    realanswer = item + realanswer;
  });
  return realanswer;
}
solution(n);

//map vs foreach
//map은 새배열을 리턴할 수 있기때문에 새로운 값을 받을때 유용하다.
//foreach는 각 배열의 온소를 순회하면서 해당하는 역할을 수행
//map은 새 배열의 결과값을 받을 때 사용한다.

//즉, foreach는 기존의 배열을 변경 , map은 새로운 배열을 반환!
