const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(4);

const arr5 = new Array(5).fill(5);
// fill은 입력받은 값으로 배열의 모든 욕소를 초기화한다.
// [5,5,5,5,5]

const arr6 = Array.from(Array(5), function (v, k) {
  //v 는 배열의 값 , k는 배열의 인덱스
  return k + 1;
});
// [1,2,3,4,5]

const arr7 = Array.from(arr3, function (v, k) {
  return v + 1;
});
console.log(arr7);
//[2,3,4,5,6]

//Array.from이 초기화라고 보면됨 기존의 배열에서 인덱스와 값을 가져다 새롭게 만듬

arr3.length = 3;
console.log(arr3);
// [ 1,2,3]
// 뒤의 요소가 삭제됨

//사용하지 않는거 권장

// join

const arr8 = [1, 2, 3, 4, 5, 6];

//reverse => 원래 있는 배열에 영향을 줌

//concat
//배열합치기

console.log(arr1.concat(arr2));

//silce(시작요소,삭제요소직전)
// 중간에 있는 요소 삭제

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(2, 4));

//splice(시작요소,몇개)
// 기존의 배열에 영향을 미친다.

// 배열의 순회

const ARR = [1, 2, 3, 4, 5];
for (const item of ARR) {
  console.log(item);
} // 새로운 방법 더욱 직관적

for (let i = 0; i < 3; i++) {}

//배열은 객체처럼 사용이가능하다.

console.log(typeof arr);
// Object

arr["key"] = "value";
// 그러나 배열의 길이는 증가X

//객체

const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "박상하", company: "kakao" };

// 객체추가방법

obj2.name = "추가된 이름";
obj2["age"] = "추가된 나이";

console.log(obj2);

// 객체삭제하는방법

delete obj2.name;

// key 존재확인법

console.log("name" in obj2); //false
console.log("age" in obj2); //true

//key 찾는법
console.log(Object.keys(obj2));
//[`age`]
console.log(Object.values(obj2));
//[`추가된 나이`]

//객체 순환방법

const OBJ = { name: `박상하`, age: 12 };

for (const key in OBJ) {
  console.log(key, OBJ[key]);
}
