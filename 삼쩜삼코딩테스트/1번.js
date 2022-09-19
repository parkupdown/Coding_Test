const students = ["AAALLLAPAA", "AAAAAAAPPP", "ALAAAAPAAA"];

function solution(students) {
  let Pcount = 0;
  let Lcount = 0;
  let studentpoint = 10;
  let pointarr = [];
  students.forEach((item) => {
    [...item].forEach((item) => {
      if (item === "L") {
        Lcount = Lcount + 1;
      }
      if (item === "P") {
        Pcount = Pcount + 1;
        studentpoint = studentpoint - 1;
      }
      if (item === "A") {
        studentpoint = studentpoint + 1;
      }
    });

    if (Lcount >= 3) {
      Pcount = Pcount + Math.floor(Lcount / 3);
      studentpoint = studentpoint - Math.floor(Lcount / 3);
    }
    if (Pcount >= 3) {
      studentpoint = 0;
    }
    pointarr.push(Math.floor(studentpoint));
    studentpoint = 10;
    Pcount = 0;
    Lcount = 0;
  });
  let copypointarr = pointarr;
}
solution(students);
