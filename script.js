function computerPlay() {
 let random = Math.floor((Math.random()*10)+1);
 if(random<4){
    return "scissors";
 }else if(random>3 && random<7){
        return "rock";
 }else{
     return "paper";
 }
}

const computer = computerPlay();
const player = prompt("Wybierz cos");
player = player.toLowerCase();


function playRound(player,computer) {
    if(player === "scissors" && computer === "paper" || player === "paper" && computer ==="rock" || player === "rock" && computer === "scissors"){
        return "You win!";
    }else if(player === computer){
        return "Draw!";
    }else{
        return "You Lose!"
    }

}

console.log(playRound(player,computer));