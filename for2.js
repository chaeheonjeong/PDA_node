let x = [3, 6, 9, 20, -7, 5];
for (let i = 0; i < x.length; i++) {
  x[i] *= 10;
  console.log(x[i]);
}

x.map((item) => {
  return (item *= 10);
});
console.log(x);

let y = {
  math: 70,
  science: 80,
  english: 20,
};
for (let key in y) {
  y[key] += 10;
  console.log(y[key]);
}

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// process.stdout.write("정수를 입력해주세요: ");
// rl.on("line", function (line) {
//   let number = Number(line);

//   for (let i = 1; i <= 9; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
//   }

//   rl.close();
// });

let word = ["school", "game", "piano", "science", "hotel", "mountian"];
let result = word.filter((value) => value.length >= 6);
console.log(result);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.stdout.write("정수를 입력해주세요: ");
rl.on("line", function (line) {
  let number = parseInt(line);

  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) console.log(i, " : 3과 5의 공배수");
    else if (i % 3 === 0) console.log(i, " : 3의 배수");
    else if (i % 5 === 0) console.log(i, " : 5의 배수");
    else console.log(i, " : 그냥 숫자");
  }

  rl.close();
});
