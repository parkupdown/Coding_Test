function solution(m, musicinfos) {
  m = m.replace(/C#/g, "Z");
  m = m.replace(/D#/g, "X");
  m = m.replace(/F#/g, "V");
  m = m.replace(/G#/g, "N");
  m = m.replace(/A#/g, "M");

  const answer = [];

  //시간을 변환시키는게 가장 먼저 할일
  musicinfos = musicinfos.map((musicinfo) =>
    musicinfo.split(",").map((arr, index) => {
      if (index === 0 || index === 1) {
        return arr
          .split(":")
          .map((i, index) => {
            if (index === 0) {
              return i * 60;
            }
            return i * 1;
          })
          .reduce((cur, acc) => acc + cur);
      }
      if (index === 3) {
        arr = arr.replace(/C#/g, "Z");
        arr = arr.replace(/D#/g, "X");
        arr = arr.replace(/F#/g, "V");
        arr = arr.replace(/G#/g, "N");
        arr = arr.replace(/A#/g, "M");
        return arr;
      }
      return arr;
    })
  );
  // 분으로 변경뒤 그 차이를 알 수 있게 됨

  musicinfos.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let fullSongArr = [];

  for (let i = 0; i < musicinfos.length; i++) {
    let songLength = musicinfos[i][1] - musicinfos[i][0];
    let fullSong = musicinfos[i][3];
    const originSongLength = [...fullSong].length;
    if (fullSong.length < songLength) {
      while (fullSong.length < songLength) {
        for (let j = 0; j < originSongLength; j++) {
          if (fullSong.length === songLength) {
            break;
          }
          fullSong = fullSong + fullSong[j];
        }
      }
    } else if (fullSong.length >= songLength) {
      fullSong = musicinfos[i][3].slice(0, songLength);
    }

    fullSongArr.push(fullSong);
  }

  fullSongArr.forEach((item, index) => {
    //# 구분하기 마지막만

    if (item.includes(m)) {
      answer.push(musicinfos[index][2]);
    }
  });

  return answer.length === 0 ? "(None)" : answer[0];
}

/*function solution(m, musicinfos) {
  const answer = [];
  //시간을 변환시키는게 가장 먼저 할일
  musicinfos = musicinfos.map((musicinfo) =>
    musicinfo.split(",").map((arr, index) => {
      if (index === 0 || index === 1) {
        return arr
          .split(":")
          .map((i, index) => {
            if (index === 0) {
              return i * 60;
            }
            return i * 1;
          })
          .reduce((cur, acc) => acc + cur);
      }
      return arr;
    })
  );
  // 분으로 변경뒤 그 차이를 알 수 있게 됨

  musicinfos.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let fullSongArr = [];

  for (let i = 0; i < musicinfos.length; i++) {
    let songLength = musicinfos[i][1] - musicinfos[i][0];
    let sshapCount = musicinfos[i][3]
      .split("")
      .filter((item) => item === "#").length;
    let fullSong = musicinfos[i][3];
    const originSongLength = [...fullSong].length;
    if (fullSong.length - sshapCount < songLength) {
      while (fullSong.length - sshapCount < songLength) {
        for (let j = 0; j < originSongLength; j++) {
          if (fullSong.length - sshapCount === songLength) {
            break;
          }
          fullSong = fullSong + fullSong[j];
          if (fullSong[j] === "#") {
            sshapCount = sshapCount + 1;
          }
        }
      }
    }

    fullSongArr.push(fullSong);
  }

  fullSongArr.forEach((item, index) => {
    if (item.includes(m)) {
      answer.push(musicinfos[index][2]);
    }
  });

  return answer;
}

function solution(m, musicinfos) {
  m = m.replace(/C#/g, "Z");
  m = m.replace(/D#/g, "X");
  m = m.replace(/F#/g, "V");
  m = m.replace(/G#/g, "N");
  m = m.replace(/A#/g, "M");

  const answer = [];
  //시간을 변환시키는게 가장 먼저 할일
  musicinfos = musicinfos.map((musicinfo) =>
    musicinfo.split(",").map((arr, index) => {
      if (index === 0 || index === 1) {
        return arr
          .split(":")
          .map((i, index) => {
            if (index === 0) {
              return i * 60;
            }
            return i * 1;
          })
          .reduce((cur, acc) => acc + cur);
      }
      if (index === 3) {
        arr = arr.replace(/C#/g, "Z");
        arr = arr.replace(/D#/g, "X");
        arr = arr.replace(/F#/g, "V");
        arr = arr.replace(/G#/g, "N");
        arr = arr.replace(/A#/g, "M");
        return arr;
      }
      return arr;
    })
  );
  // 분으로 변경뒤 그 차이를 알 수 있게 됨
  console.log(musicinfos);
  musicinfos.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let fullSongArr = [];

  for (let i = 0; i < musicinfos.length; i++) {
    let songLength = musicinfos[i][1] - musicinfos[i][0];

    let fullSong = musicinfos[i][3];
    const originSongLength = [...fullSong].length;
    if (fullSong.length < songLength) {
      while (fullSong.length < songLength) {
        for (let j = 0; j < originSongLength; j++) {
          if (fullSong.length === songLength) {
            break;
          }
          fullSong = fullSong + fullSong[j];
        }
      }
    }

    fullSongArr.push(fullSong);
  }

  fullSongArr.forEach((item, index) => {
    //# 구분하기 마지막만

    if (item.includes(m)) {
      answer.push(musicinfos[index][2]);
    }
  });

  return answer.length === 0 ? "(None)" : answer[0];
}
solution(m, musicinfos);



let m = "CC#BCC#BCC#BCC#B";
let musicinfos = ["04:00,00:00,BAR,CC#BCC#BCC#B", "03:00,03:30,FOO,CC#B"];


function solution(m, musicinfos) {  
    
    m= m.replace(/C#/g,"Z")
    m= m.replace(/D#/g,"X")
    m= m.replace(/F#/g,"V")
    m= m.replace(/G#/g,"N") 
    m= m.replace(/A#/g,"M") 
      
      const answer =[]
      
    musicinfos= musicinfos.map((arr)=>arr.split(`,`).map((item,index)=>{
       if(index===1&&item==="00:00"){
           return "24:00"
       }
        return item
   }))   
      
    //시간을 변환시키는게 가장 먼저 할일
  musicinfos = musicinfos.map((musicinfo)=>musicinfo.map((arr,index)=>{
    if(index===0 || index===1){
      
       return arr.split(":").map((i,index)=>{
            if(index===0){
                return i*60
            }
            return  i*1
        }).reduce((cur,acc)=>acc+cur)
    }  
      if(index===3){
    arr= arr.replace(/C#/g,"Z")
    arr= arr.replace(/D#/g,"X")
    arr= arr.replace(/F#/g,"V")
    arr= arr.replace(/G#/g,"N") 
    arr= arr.replace(/A#/g,"M") 
          return arr
      }
      return arr
  }))
  // 분으로 변경뒤 그 차이를 알 수 있게 됨 
  
  console.log(musicinfos)
      
  musicinfos.sort((a,b)=>b[1]-b[0]-(a[1]-a[0]))
      
  let fullSongArr=[]
  
  for(let i = 0 ; i <musicinfos.length; i++){
    let songLength = musicinfos[i][1]-musicinfos[i][0]
   
    let fullSong = musicinfos[i][3]
    const originSongLength = [...fullSong].length
      if(fullSong.length<songLength){
          
    while(fullSong.length<songLength){
    for(let j = 0 ; j < originSongLength; j++){
        if(fullSong.length === songLength){
            break;
        }
        fullSong= fullSong + fullSong[j]
    }
    }
      }
      
   fullSongArr.push(fullSong)   
      
  }   
  
    fullSongArr.forEach((item,index)=>{
        //# 구분하기 마지막만 
        
        if(item.includes(m)){
            answer.push(musicinfos[index][2])
        }
    })
          
   return answer.length===0 ? "(None)" : answer[0]
      
  }
  solution(m, musicinfos);
  */
