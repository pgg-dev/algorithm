const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [L, A, B] = input.split(" ").map((num) => Number(num));

  const ratio = L / Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
  console.log(`${Math.floor(ratio * A)} ${Math.floor(ratio * B)}`);

  rl.close();
}).on("close", () => {
  process.exit();
});
