# CodingTest_Retry
코딩테스트 Level 1 부터 다시시작

## 숫자의표현 (level2)
자연수를 연속된 자연수로 표현할 수 있는 경우의 수를 묻는 문제
조건식과 반복식을 이용하여 풀수도 있지만 더 좋은 아이디어가 있어서 메모한다.

### 연속하는 자연수의 합의 경우를 구하는 건 약수 중 홀수의 갯수를 구하는 문제와 같다.

```js
const n = 24;
function solution(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 1 && n % i === 0) {
      count++;
    }
  }
  return count;
}
solution(n);
```

## 다음큰숫자(level2) , match

이 문제를 풀며 match함수에 대해 배울 수 있었다. 

### string.match(찾을단어) 이렇게 쓰인다.
indexOf와 다른 점은 정규식 검색을 통해 결과값을 배열로 받아볼 수 있다.

```js
const RR = "love you , love, everything, love"
console.log(RR.match(/love/gi))//없으면 null값이나온다.
//return [love,love,love]
```

## 짝지어제거하기 ( level2 ) ,Splice vs slice

이 문제를 풀며 반복문(for문) + splice,slice에 대해 배울 수 있었다.

### Splice = > 원본에 영향을 준다. 제거하고 남은 배열을 반환하고 만약 제거할게 없다면 undefined를 반환한다.
### Slice => 원본에 영향을 주지 않는다. return이 필요 , 삭제할 배열 요소를 반환 받을 수 있다. 

헤맸던 부분 
```JS
const s = "baabaa";
function solution(s) {
  let A = [...s];

  for (i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      A.splice(i, 2);
      i = 0; // 여기서 i=0으로 리셋했는데 반복문은 i=1로 돌아갔다. 반복문은 시작값을 0으로 시작할 뿐
      // 다음 loop를 돌 때는 +1이 되기 때문에 i= -1 을 해주어야 정상적으로 작동되었다.
    } 
  }
  return A.length === 0 ? 1 : 0;
}
solution(s);
```
이렇게 풀었는데 결과값은 정상적으로 나오지만 효율성 테스트를 통과하지 못했다.
