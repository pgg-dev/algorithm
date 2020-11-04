const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const answer = input
    .split(" ")
    .reduce((acc, num) => acc + Number(num * num), 0);
  console.log(answer % 10);
  rl.close();
}).on("close", () => {
  process.exit();
});
