const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkBinary = (value, idx) => {
  let zero = "";
  if (idx !== 0 && value.length < 3) {
    for (let i = 0; i < 3 - value.length; i++) {
      zero += "0";
    }
  }
  return zero + value;
};

rl.on("line", (input) => {
  const answer = String(input)
    .split("")
    .map((value, idx) => checkBinary(Number(value).toString(2), idx))
    .join("");
  console.log(answer);
  rl.close();
}).on("close", () => {
  process.exit();
});
