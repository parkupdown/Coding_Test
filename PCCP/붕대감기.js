function solution(bandage, health, attacks) {
  let hp = health;
  const maxHp = health;
  let [coolTime, heal, skilHeal] = bandage;
  // coolTime만큼 쌓이면 skilHeal사용이가능하다.
  // attacks의 공격을 받고도 살아있냐 죽었냐에 대한 return
  let time = 0;
  let charge = 0;
  attacks.sort((a, b) => a[0] - b[0]);
  // 시간은 1초단위로 흘러간다.
  while (hp > 0) {
    if (attacks.length === 0) {
      return hp;
    }
    time = time + 1;
    const [round, attack] = attacks[0];
    if (time === round) {
      hp = hp - attack;
      charge = 0;
      attacks.shift();
    } else {
      charge = charge + 1;
      hp = hp + heal;
      if (charge === coolTime) {
        hp = hp + skilHeal;
        charge = 0;
      }
      if (hp > maxHp) {
        hp = maxHp;
      }
    }
  }

  return -1;
}
