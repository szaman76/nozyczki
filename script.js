window.onload = evt => {
  function computerPlay() {
    let random = Math.floor((Math.random() * 10) + 1);
    if (random < 4) {
      return "scissors";
    } else if (random > 3 && random < 7) {
      return "rock";
    } else {
      return "paper";
    }
  }
  function playRound(player, computer) {

    if (player === "scissors" && computer === "paper") {
      return "You Win!";
    } else if (player === "paper" && computer === "rock") {
      return "You Win!";
    } else if (player === "rock" && computer === "scissors") {
      return "You Win!";
    } else if (player === "paper" && computer === "paper") {
      return "Draw!";
    } else if (player === "rock" && computer === "rock") {
      return "Draw!";
    } else if (player === "scissors" && computer === "scissors"){
      return "Draw!";
    } else{
    return "You Lose!";
  }
}
  var computer = computerPlay();
  var player = prompt("Wybierz cos");



  console.log(playRound(player,computer));
  console.log("Player = " + player)
  console.log("computer = " + computer);
};
