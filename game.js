// Rock-Paper-Scissors 💖
let player = 0; // 0 = Rock, 1 = Paper, 2 = Scissors
let c = Math.floor(Math.random() * 3);

console.log("Player picked: ");
if (player === 0) {
  console.log("Rock");
} else if (player === 1) {
  console.log("Paper");
} else {
  console.log("Scissors");
}

console.log("Computer picked: ");
if (c === 0) {
  console.log("Rock");
} else if (c === 1) {
  console.log("Paper");
} else {
  console.log("Scissors");
}

// Winner logic
if (player === c) {
  console.log("It's a draw!");
} else if (
  (player === 0 && c === 2) || // Rock beats Scissors
  (player === 1 && c === 0) || // Paper beats Rock
  (player === 2 && c === 1)    // Scissors beats Paper
) {
  console.log("The player has won!");
} else {
  console.log("The computer has won!");
}
