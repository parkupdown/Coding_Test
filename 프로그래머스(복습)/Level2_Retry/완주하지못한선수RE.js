let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  participant.sort((a, b) => (a > b ? 1 : -1));
  completion.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
/*
function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    const indexOfParticipant = completion.indexOf(participant[i]);
    console.log(indexOfParticipant);
    if (indexOfParticipant === -1) {
      return participant[i];
    }
    completion.splice(indexOfParticipant, 1);
  }
}
solution(participant, completion);

*/
