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
