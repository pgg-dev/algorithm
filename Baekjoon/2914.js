const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [A, I] = input.split(" ");
  console.log(A * (I - 1) + 1);
  rl.close();
}).on("close", () => {
  process.exit();
});
