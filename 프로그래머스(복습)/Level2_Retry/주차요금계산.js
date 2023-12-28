const fees = [180, 5000, 10, 600];
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

function arangeArr(arr) {
  const arangedArr = arr
    .map((item) => item.split(` `))
    .map((item2) =>
      item2.map((item3, index) => {
        if (index === 0) {
          const time = item3.split(`:`);

          return time[0] * 60 + time[1] * 1;
        }
        return item3;
      })
    );

  return arangedArr;
}

function solution(fees, records) {
  records = arangeArr(records);
  let answer = new Map();

  records.forEach((item) => {
    if (answer.get(item[1]) === undefined) {
      answer.set(item[1], 0);
    }
  });

  let IN = [];
  let OUT = [];

  records.forEach((item) => {
    item[2] === "IN" ? IN.push(item) : OUT.push(item);
  });

  for (let i = 0; i < IN.length; i++) {
    for (let j = 0; j < OUT.length; j++) {
      if (IN[i][1] === OUT[j][1]) {
        let time = OUT[j][0] - IN[i][0];
        answer.set(IN[i][1], answer.get(IN[i][1]) + time);
        IN.splice(i, 1);
        OUT.splice(j, 1);
        i = -1;
        j = -1;
        break;
      }
    }
  }

  if (IN.length !== 0) {
    IN.forEach((item) => {
      let time = 1439 - item[0];
      answer.set(item[1], answer.get(item[1]) + time);
    });
  }

  answer = [...answer];

  answer = answer
    .sort((a, b) => a[1] - b[0])
    .map((item) =>
      item
        .map((item2, index) => {
          if (index === 1) {
            return item2 <= fees[0]
              ? fees[1]
              : fees[1] + Math.ceil((item2 - fees[0]) / fees[2]) * fees[3];
          }
        })
        .filter((item, index) => index === 1)
    );

  answer = answer.reduce((acc, cur) => [...acc, ...cur], []);

  return answer;
}

solution(fees, records);

let time = OUT[j][0] - IN[i][0];
let fee = Math.ceil(((time - fees[0]) / fees[2]) * fees[3]);
time <= fees[0]
  ? answer.set(IN[i][1], answer.get(IN[i][1]) + fees[1])
  : answer.set(IN[i][1], fees[1] + answer.get(IN[i][1]) + fee);

/*
let fees = [180, 5000, 10, 600];
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

function solution(fees, records) {
  let In = [];
  let Out = [];
  const Info = new Map();

  records = records
    .map((item) => item.split(` `))
    .map((item) =>
      item.map((item2, index2) => {
        if (index2 === 0) {
          const time = item2.split(`:`);
          return time[0] * 60 + time[1] * 1;
        }
        return item2;
      })
    );

  records.forEach((item) => {
    if (Info.get(item[1]) === undefined) {
      Info.set(item[1], 0);
    }

    if (item[2] === "IN") {
      In.push(item);
    }
    if (item[2] === "OUT") {
      Out.push(item);
    }
  });
  let bill = 0;

  for (let i = 0; i < Out.length; i++) {
    if (In[0][1] === Out[i][1]) {
      bill = ((Out[i][0] - In[0][0]) / fees[2]) * fees[3];
      bill <= fees[0]
        ? Info.set(In[i][1], Info.get(In[i][1]) + fees[1])
        : Math.ceil(bill);
      In.shift();
      Out.splice(i, 1);
      i = -1;
    }
  }
  if (In.length !== 0) {
    In.forEach((item) => {
      const bill = ((1439 - item[0]) / fees[2]) * fees[3];

      item[0] <= fees[0]
        ? Info.set(item[1], Info.get(item[1]) + fees[1])
        : Info.set(item[1], Info.get(item[1]) + bill);
    });
  }
  return Info;
}

solution(fees, records);



let target = "";
  while (records.length > 0) {
    target = records[0];
    let bill = 0;
    for (let i = 1; i < records.length; i++) {
      if (target[1] === records[i][1]) {
        bill = records[i][0] - target[0];
        bill <= fees[0]
          ? Info.set(records[i][1], Info(get(records[i][1])) + fees[1])
          : Math.ceil((bill / fees[2]) * fees[3]);

        records.pop();
        records.splice(i, 1);
      }
    }




  } */
