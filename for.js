const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.stdout.write("정수를 입력해주세요: ");
rl.on("line", function (line) {
  let number = Number(line);

  // ******안녕 코드*******
  //   for (let i = 0; i < number; i++) {
  //     console.log("안녕");
  //   }
  // 코드 종료

  // *********별 코드 ***********
  //   for (let i = 1; i <= number; i++) {
  //     for (let j = 0; j < i; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log();
  //   }

  //*************역순 별코드******** */
  for (let i = 0; i < number; i++) {
    for (let j = number - i; j > 0; j--) {
      process.stdout.write("*");
    }
    console.log();
  }

  rl.close();
});
