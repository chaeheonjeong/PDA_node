const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
process.stdout.write("점수를 입력해주세요: ");
rl.on("line", function (line) {
  // 코드 작성 console.log(line)
  let number = Number(line);
  if (number % 2 === 0) console.log(`입력하신 ${number}은 짝수입니다.`);
  else if (number % 2 != 0) console.log(`입력하신 ${number}은 홀수입니다.`);
  // 코드 종료
  rl.close();
});
