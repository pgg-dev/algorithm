const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr.push(input);

  if (arr.length === 2) {
    const [T, D] = arr;
    let [H, M, S] = T.split(" ").map((i) => Number(i));
    S += D;

    if (S > 59) {
      M += Math.floor(S / 60);
      S %= 60;
    }

    if (M > 59) {
      H += Math.floor(M / 60);
      M %= 60;
    }

    if (H > 23) {
      H %= 24;
    }
    console.log(`${H} ${M} ${S}`);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});
