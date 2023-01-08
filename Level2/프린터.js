const priorities = [2, 1, 3, 2];

function makeArr(priorities) {
  const Arr = [];
  let count = 0;
  priorities.forEach((item) => {
    Arr.push(count);
    count = count + 1;
  });

  return Arr; // [0,1,2,3]
  //이걸 활용해서 location과 같은 element가 나오면 순서를 카운트해서 return?
}

function solution(priorities) {
  const arr = makeArr(priorities);
  console.log(arr);
}

solution(priorities);
//index를 추적할 수 있어야 함

//location에 따라 몇 번 째인지 추적이 가능해야한다.

//priorities를 활용하여 같은 배열을 하나 더 만든다. [1,2,3,4,5,6]

// 이런식으로 이 배열을 하나 만들어 location의 고정값을 만들고 규칙대로 진행하면될것
