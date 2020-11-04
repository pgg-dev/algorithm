const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [N, M] = input.split(" ").map((num) => Number(num));
  console.log(Math.abs(N - M));

  rl.close();
}).on("close", () => {
  process.exit();
});
