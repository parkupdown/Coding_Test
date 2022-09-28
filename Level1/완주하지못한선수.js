const participant = ["a", "a", "a", "b", "c"];
const completion = ["a", "a", "b", "c"];

function solution(participant, completion) {
  const A = participant.sort((a, b) => (a >= b ? 1 : -1));
  const B = completion.sort((a, b) => (a >= b ? 1 : -1));
  const C = A.filter((item, index) => item !== B[index]);
  const answer = C[0];
  return answer;
}
solution(participant, completion); //해결
