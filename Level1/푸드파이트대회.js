const food = [1, 3, 4, 6];

function solution(food) {
  const foodArr = [];

  food.forEach((item, index) => {
    if (index !== 0) {
      for (i = 0; i < Math.floor(item / 2); i++) {
        foodArr.push(index);
      }
    }
  });

  const reverseFoodArr = [...foodArr].reverse();

  const answer = [...foodArr, 0, ...reverseFoodArr];

  return answer.join("");
}
solution(food);

// 사람1 OOOOO물OOOOO 사람2

// 물에 먼저 도착하는 사람이 이기는거

// 음식의 종류와 양이 같아야 한다.

// 음식의 순서도 같아야한다.

//repeat=> string을 반복해줌
