function solution(m, musicinfos) {
  //음악 길이보다 재생된 시간이 짧은 때는 처음부터 재생시간만큼만 재생된다.
  // 각 음은 1분개 1개씩
  // 조건이 일치하면 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환
  // 재생시간도 같다면? 먼저 입력된 음악제목을 반환
  // 재생된 시간이 더 짧다면? => 그냥 비교해주면 됨
  // 재생된 시간이 더 길다면 ? 전곡을 분에 맞춰서 늘려줘야함
  // musincinfos가 진짜 그 노래정보를 담고있다.

  // 1. 재생 시간이 긴 순서로 정렬을 한다.
  // 2. musicinfos에서 음악을 분에 맞춰서 늘려준다
  // 3. 마지막으로 m과 비교를 해주고 맞다면? 음악제목을 반환한다.
  // 4. 없다면 None을 반환한다.

  //1. 시간을 어떻게 변경하나. 시간을 60곱하고 분에 더하자
  musicinfos = musicinfos
    .map((arr) =>
      arr.split(`,`).map((item, index) => {
        if (index === 0 || index === 1) {
          return item
            .split(`:`)
            .map((item, index) => (index === 0 ? item * 60 : item))
            .reduce((a, c) => a * 1 + c * 1);
        }
        return item;
      })
    )
    .map((arr) =>
      arr.map((item, index) => {
        if (index === 0) {
          return arr[1] - item;
        }
        return item;
      })
    );
  //시간을 구할 수 있다. 재생 시간으로 정렬

  musicinfos.sort((a, b) => b[0] - a[0]);

  // 분에 맞춰서 늘려주기
  // 근데 #에 주의해서
  //C# D# F# G# A# 을 변경해주자
  const change = (s) => {
    s = s.replace(/C#/g, "Z");
    s = s.replace(/D#/g, "X");
    s = s.replace(/F#/g, "V");
    s = s.replace(/G#/g, "N");
    s = s.replace(/A#/g, "M");
    return s;
  };
  m = change(m);

  musicinfos = musicinfos.map((acc) =>
    acc.map((item, index) => {
      if (index === 3) {
        return change(item);
      }
      return item;
    })
  );
  // 변환함
  // 이제 길이만큼 늘려준다.

  const bigger = (n, music) => {
    while (n >= music.length) {
      music = music + music;
    }
    return music;
  };

  musicinfos = musicinfos.map((arr) =>
    arr.map((item, index) => {
      if (index === 3) {
        return bigger(arr[0], item);
      }
      return item;
    })
  );

  for (let i = 0; i < musicinfos.length; i++) {
    if (musicinfos[i][3].includes(m)) {
      return musicinfos[i][2];
    }
  }

  return "(None)";
}
