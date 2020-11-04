const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const chess = [1, 1, 2, 2, 2, 8];

rl.on("line", (input) => {
  const answer = input
    .split(" ")
    .map((item, idx) => chess[idx] - item)
    .join(" ");
  console.log(answer);
  rl.close();
}).on("close", () => {
  process.exit();
});
