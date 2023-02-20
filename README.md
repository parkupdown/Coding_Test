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


```JS
const s = "baabaa";
function solution(s) {
  let A = [...s];
  let B = [];
  for (i = 0; i < A.length; i++) {
    if (A[i] === B[B.length - 1]) {
      B.pop();
    } else if (A[i] !== B[B.length - 1]) {
      B.push(A[i]);
    }
  }
  return B.length === 0 ? 1 : 0; //이렇게 풀었더니 통과했다. 
  //블로그를 찾아보았다ㅠㅠ
}
solution(s);
```
### splice는 효율성이 떨어진다 ( 반복마다 새로운 배열을 만들기때문) 반복문은 한 번의 loop만 돌리면서 즉각적으로 데이터를 비교하려면 하나의 배열을 생성하여 실시간으로 비교하는 방법이 더 좋다.

## 멀리뛰기 (피보나치수열)

<img width="550" alt="image" src="https://user-images.githubusercontent.com/101778169/196688477-48c37f30-96f8-488b-9032-c025cba389e6.png">

해당문제를 보고 처음엔 팩토리얼을 활용하여 해결했다.
```js
const n = 10;

function solution(n) {
  const A = Math.floor(n / 2);
  let answer = 0;
  for (i = 1; i <= A; i++) {
    let Sum = 1;
    let count = i + n - i * 2; //6
    for (j = 0; j < i; j++) {
      Sum = Sum * ((count - j) / (i - j));
    }
    answer = answer + Sum;
  }
  const answers = (answer + 1) % 1234567;
  return answers;
}
solution(n);
```
하지만 해당문제는 피보나치 수열을 활용해서 푸는 것만 정답으로 처리가 됐다

### 피보나치수열
(n-2)번째 항 + (n-1)번째 항이 n 번째 항인 수열을 말한다.

1,1,2,3,5,8,13,21 이 이러하다

문제를 보면 n=1 일때 1 n=2 일 때 2 n=3 일때 3 n= 4일때 5 n= 5일때 8이 리턴값으로 나오는것을 보면
이는 피보나치 수열임을 알 수있다. 

그렇기 때문에 
```js
function solution(n) {
  let answer = [0, 1, 2];
  for (i = 3; i <= n; i++) {
    answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567;
  }
  return answer[n] % 1234567;
}//이렇게 해결할 수 있다.
```

## 행렬의 곱셉(reduce 메소드)

reduce 메소드는 map 과 forEach와 비슷하다!

```js
const number = [1,2,3,4]

number.reduce((누산값,현재요소값,현재요소의index,현재배열)={
return 다음누산값 },초기누산값)

```
예를들어 이렇게 사용할 수 있다.

```js
const numbers = [1,2,3,4]
const sum = numbers.reduce((sum,num,index)=>{
return sum+num},0)
//10 순차적으로 더해준다.
```
참고 https://bigtop.tistory.com/69

## new Map() 활용법 (배열에서 특정 원소 몇개인지 찾거나 이를 이용하는 문제)

```js

const arr = [1,2,3,3,4,4,5,6,6]
```
arr을 forEach() 메서드를 통해 순환하며 map에 저장하면서하면 간단하게 내용을 저장할 수 있다.

```js
arr.forEach((item))=>{
map.set(item,map.get(item)+1)
}

```

# 코딩테스트를 연습하는 방법을 바꾸어보려고한다! 

**_매일 1~2문제를 꾸준히 푸는 것은 좋지만 어떻게 꾸준히 풀어나가냐가 중요한 것같다.
앞으로는 30분안에 문제를 해결하지 못했을 때는 실패로 간주하고 해답을 볼것이다.
그리고 타인이 써주신 코드를 확인하고 그곳에서 배운 점을 정리하여 내 것으로 만들어보자!!_ **

문제풀이는 정답 성공률 순서로 정렬하여 풀어나가겠다.

## 최댓값과 최솟값

내가 푼 풀이

```js
const s = "1 2 3 4";

function solution(s) {
  const arr = s.split(` `).sort((a, b) => b - a);

  const lastIndex = arr.length - 1;

  return `${arr[lastIndex]} ${arr[0]}`;
}
solution(s);
```
나의 문제 계획은 다음과 같다.
1. 문자열을 배열로 변경하자. (split)
2. 변경된 배열을 내림차순으로 정렬하자. (sort)
3. 0인덱스는 최댓값 lastIndex는 최솟값이 된다.
4. return `${} ${}`로 중간 공백을 표시하자.

내가 본 풀이
```js
function solution(s) {
  const arr = s.split(``);

  return Math.min(...arr) + ` ` + Math.max(...arr);
}
```

굳이 배열을 정돈할 필요없이 split으로 공백을 제거한 배열로 만든 후
...의 spread operator를 활용하여 공백이 없는 string으로 만들어준다
"1","2","3","4" 의 형태
> 그 후 Math 메소드를 활용하여 Math.max, Math.min 함수를 사용한다.
> _**위 함수는 string사이에서도 사용이가능하다!!**_


## JadenCase 문자열 


문제는 다음과 같다! 
![문제 사진](https://velog.velcdn.com/images/tkdgk1996/post/f86f3a39-82a4-41b7-9e0b-4d03b23c8dc4/image.png)

문제는 간단했지만 이상하게 풀리지가 않았다. 그럼 필자에겐 간단하지 않았다는 말..

이 전에 풀었을 때는 통과했었지만 코드가 굉장히 지저분했다. 

나의 문제 해결 계획은 다음과 같다.

> 1. split 메서드로 스트링을 배열화 시킨다 
2. 받아온 요소에서 공백이 아닌 요소는 다시 한번 map을 사용한다.
3. 그 때 받아온 요소의 인덱스가 0이고 첫 번째 인자가 숫자가 아니라면 toUpperCase를하고
나머지 요소엔 toLowerCase를 한다.

결과는 실패 ! 

실패한 코드는 다음과 같다.
```js
const s = "3people   unFollowed me";

function solution(s) {
  const arr = s
    .toLowerCase()
    .split(` `)
    .map((item) => {
      if (item === ``) {
        return item;
      }
      return item
        .split()
        .map((charset, index) => {
          const check = /^[a-zA-Z]+$/;
          console.log(charset);
          return check.test(charset) === false && index === 0
            ? charset
            : charset.toUpperCase();
        })
        .join(``);
    });

  return arr;
}
solution(s);
```
정규식에.. map 두번 split 두번 굉장히 복잡해보인다.

특히 정규식에선 왜 헤맸는지 모르겠다.
**기본적인 정규식.test(string) ** 이걸 왜 그렇게 헤멨는지 모르겠다.

정리하면서 해보니 내가 아는게 제대로 아는게 아니었구나 라는 점을 알게된다..

다시 해답을 보면서 느낀 점 및 잘못된 오류는 다음과 같다.

> toUpperCase와 toLowerCase는 숫자에 적용하나 빈칸에 적용하나 변하지 않는 효과는 동일하다
 즉, 굳이 숫자와 빈칸을 나누어줄 필요가 없다.
 그냥 첫번 째 인덱스는 UpperCase() 나머지는 LowerCase()를 적용해주면된다.
 

이렇게 생각하니 정규식이 필요가 없어졌다.  이젠 그냥 string의 첫 번째 요소와 나머지 요소에 접근할 수 있으면 된다.

내가 본 코드는 다음과 같다.

```js
const S = "3people   unFollowed me";

const arr = S.split(` `)
  .map((item) =>
    item === ""
      ? item
      : item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
  )
  .join(` `);
```

위 코드는 

### CharAt, substring

위 두 메서드를 사용해서 문제를 해결했다. map과 forEach는 배열에서만 사용이 가능하다.
이 매서드를 쓰려고 다시한번 배열을 생성하는 바보같은 짓을 했다..

string 자체에서 몇 번째 요소를 사용하고 싶다면 charAt,substring 두개면 된다.

먼저 charAt으로 string에서 첫번째 요소를 가져와서 toUpperCase해주고
나머지 요소는 substring으로 접근하여 toLowerCase 해주면 된다.
javascript에서는 string 끼리의 + 연산이 가능하다.
그렇기 때문에 item.charAt(0).toUpperCase() + item.substring(1).toLowerCase()
이렇게 return 해줄 수 있다.

이 문제를 풀면서 알게된 필자의 좋지 않은 습관은 
문제에 써진대로 푼다는 점이다 문제를 보고 생각한 후 해결하는 습관을 가져야 할 거 같다.
문제에 써진 힌트대로 해결하다보니 문제가 복잡해지고 필요없는 연산이 들어간다.

## 최솟값 만들기

이 문제는 비교적 쉬운 문제였다. 

![](https://velog.velcdn.com/images/tkdgk1996/post/cf3a01db-02ea-430e-8c41-6d96e62a05e5/image.png)

 배열의 요소를 랜덤하게 곱했을 때 가장 최소가 나오는 값을 리턴하면 되는 문제이다.
 
 필자의 접근법은 다음과같다.
 
>  A배열의 가장 작은 숫자에 B배열의 가장 큰숫자를 곱하면 결과값이 가장 작지않나?

결과는 성공! 

내가 푼 코드

```js
const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer = answer + a[i] * b[i];
  }
  

  return answer;
}
```

그럼에도 여기서 더 간단하게 만들수 있는 타인의 코드가 있었다.

```js

function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}
```
여기서 배운 점은 2가지이다

1. sort는 원본을 변경시킨다! 그럼으로 새로 그 값을 저장하지 않아줘도 된다.
2. reduce

### reduce

reduce함수는 가끔 썼었지만 자주 쓰지는 않았다. 뭔가 reduce를 쓰는 것보다 for문을 사용하는 것이
개인적으로는 더 좋았기 때문이다. 그럼에도 reduce를 한번 알아보고 넘어가야할 거 같아 정리를 해본다.

reduce 메서드는 다음과 같이 사용한다. 
> 배열.reduce((누적값,현재값,인덱스,요소)=>{return 결과, 초기값}

여기서 초기값은 설정해주지 않으면 자동으로 0이 된다.

하지만 reduce를 무조건 덧셈에 활용할 수 있는 것은 아니다.

map, filter와 동일하게 사용할 수 있다.

```js
result = array.reduce((acc,cur)=>{
acc.push(cur%2===0 ? "홀수" : "짝수")
 return acc;
},[])

```
이렇게 초기값을 [] 인 배열로 설정하면 조건에 따른 배열로 리턴도 가능하다. 

정리하면
array.reduce((누적값, 현재값, 인덱스)=>{
return 
},초기값)

이렇게 사용하고 return된 값을 받는 메서드이다! 
[제로초 Reduce 설명글](https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d)


## 올바른괄호

올바른 괄호문제는 "스택" 문제이다

![](https://velog.velcdn.com/images/tkdgk1996/post/22f2157d-8c70-4448-83ea-9f1293031b66/image.png)


스택문제는 
[프로그래머스 JS 코딩테스트 인터넷강의](https://school.programmers.co.kr/learn/courses/13213/13213-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B4%91%ED%83%88-%EB%B0%A9%EC%A7%80-a-to-z-javascript)

여기서 다루어 보았다. 스택은 First In Last Out이다. 
처음에 들어온것이 마지막에 나가는 순서인데 여기서는 그냥 검증을 해주는 용도로 스택을 사용하면된다.

>나의 접근법은 아래와 같다. "(" 를 보면 arr에 무언가를 담고 
")"를 보면 arr에서 한가지를 빼자
만약 arr이 비었는데 (length가 0 인데) ")" 가 나온다면 false를 return 
또 모든 배열 순환이 끝난 후 length가 0보다 크면 false를 return 하는 것으로 정했다.

나의 풀이법은 다음과 같다. 

```js
const s = "(())()";

function solution(s) {
  const check = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      check.push(0);
    }
    if (s.charAt(i) === ")") {
      if (check.length === 0) {
        return false;
      }
      check.pop();
    }
  }
  if (check.length > 0) {
    return false;
  }
  return true;
}
```

앞서 배운 문제에서 split 하지 않고 charAt으로 string 내부의 index에 접근하여 
문제를 해결하였다.



