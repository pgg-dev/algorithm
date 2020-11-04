const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [A, B, C] = input.split(" ").map((num) => Number(num));
  console.log(C <= B ? -1 : Math.floor(A / (C - B)) + 1);

  rl.close();
}).on("close", () => {
  process.exit();
});
