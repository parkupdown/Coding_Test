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
