const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

/*music and soundfx*/
const bgMusic = document.getElementById('bgMusic');

const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const tieSound = document.getElementById('tieSound');

const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

bgMusic.play();
bgMusic.volume = 0.3;
winSound.volume = 0.1;
loseSound.volume = 0.3;
tieSound.volume = 1;

playPauseBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playPauseBtn.textContent = '⏸';
    } else {
        bgMusic.pause();
        playPauseBtn.textContent = '▶️';
    }
});

volumeControl.addEventListener('input', (event) => {
    bgMusic.volume = event.target.value / 100;
});

/* rock paper scissors */
function playGame(playerChoice){
//this const is inside the function so it gets updated each time the function runs
const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";

if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
}
else{
    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
    }
}

playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
resultDisplay.textContent = result;

resultDisplay.classList.remove("winText","loseText", "tieText")

switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("winText"); 
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        // Reset the audio to the beginning if it's already playing
        if (!winSound.paused) {
            winSound.currentTime = 0; // Reset to start
        }
        winSound.play(); // Play the sound
        break;
    case "YOU LOSE!":
        resultDisplay.classList.add("loseText"); 
        computerScore++;
        // Reset the audio to the beginning if it's already playing
        if (!loseSound.paused) {
            loseSound.currentTime = 0; // Reset to start
        }
        loseSound.play(); // Play the sound
        computerScoreDisplay.textContent = computerScore;
        break;
    case "IT'S A TIE!":
        resultDisplay.classList.add("tieText"); 
        // Reset the audio to the beginning if it's already playing
        if (!tieSound.paused) {
            tieSound.currentTime = 0; // Reset to start
        }
        tieSound.play(); // Play the sound
        break;
}
}