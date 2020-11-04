const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const str = input.trim().split(" ");
  console.log(str[0] === "" ? 0 : str.length);

  rl.close();
}).on("close", () => {
  process.exit();
});
