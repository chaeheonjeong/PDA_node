// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", function (line) {
//   // 코드 작성 console.log(line)
//   let scores = line.split(" ");

//   let flag = true;
//   for (let i = 0; i < 3; i++) {
//     if (Number(scores[i]) < 65) {
//       console.log(false);
//       flag = false;
//       break;
//     }
//   }
//   if (flag === true) console.log(true);
//   // 코드 종료
//   rl.close();
// });

// const name = "정채헌";
// let multi = `Hello my name is ${name}`;
// console.log(multi);
// console.log(multi.length);
// console.log(multi.indexOf("H"));
// console.log(multi.includes("정채헌"));
// console.log(multi.startsWith("Hello"));
// console.log(multi.startsWith("my"));
// console.log(multi.endsWith("정채헌"));

// let sample = "java";
// console.log(sample.slice(0, 4));

let scores = " 90:30:80 ";
scores.trim();
let [math, english, science] = scores.split(":");
let average = (Number(math) + Number(english) + Number(science)) / 3;
// console.log(`평균 점수는 ${average}입니다`);

const max1 = function (a, b) {
  return a > b ? b : a;
};
const max2 = (a, b) => {
  return a > b ? b : a;
};
const max3 = (a, b) => (a > b ? b : a);

let sample = [1, 2, 3, 4, 5, 6];
// sample.forEach(function (item, index, array) {
//   console.log(item);
//   console.log(index);
//   console.log(array);
//   console.log("-");
// });

// let sample2 = sample.map(function (value, index, array) {
//   return value * 10;
// });
// //console.log(sample2);

// let sample3 = sample.reduce(function (prev, cur) {
//   return prev + cur;
// }, 0);
// console.log(sample3);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  // 코드 작성 console.log(line)
  let scores = line.split(" ");

  let flag = true;
  for (let i = 0; i < 3; i++) {
    if (Number(scores[i]) < 0 || Number(scores[i] > 100)) {
      console.log("잘못된 점수가 입력되었습니다.");
      flag = false;
      break;
    }

    if (Number(scores[i]) < 65) {
      console.log("불합격");
      flag = false;
      break;
    }
  }
  if (flag === true) console.log("합격");
  // 코드 종료
  rl.close();
});
