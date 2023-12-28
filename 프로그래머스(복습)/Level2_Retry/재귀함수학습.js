function test(numbers) {
  if (numbers === 5) {
    return;
  }
  console.log(`원 : ${numbers + 1}`);
  test(numbers + 1);
  test(numbers + 1);
  console.log(`투 ${numbers + 1}`);
}
test(0);

// 팩토리얼만들기

function makeFactorial(number) {
  if (number === 1) {
    return 1;
  }
  console.log(number);
  return number * makeFactorial(number - 1);
}
makeFactorial(6);
