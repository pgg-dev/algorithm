const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  for (let i = 0; i < parseInt(input); i++) {
    console.log(`${" ".repeat(i)}${"*".repeat(input - i)}`);
  }
  rl.close();
}).on("close", () => {
  process.exit();
});
