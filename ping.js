const p1Score = document.querySelector('#playerOneScore');
const p2Score = document.querySelector('#playerTwoScore');
const gameLimit = document.querySelector('#game-limit');
const p1Btn = document.querySelector('#player1Btn');
const p2Btn = document.querySelector('#player2Btn');
const btnsContainer = document.querySelector('#buttons');

let maxScore= Number(gameLimit.value);
let p1ScoreValue= Number(p1Score.textContent);
let p2ScoreValue = Number(p2Score.textContent);

// console.log(typeof maxScore)
// using event delegation
btnsContainer.addEventListener('click', function(e) {
    // increase player one score count
    if(e.target.id === 'player1Btn'){
        console.log(maxScore);
        if(p1ScoreValue < maxScore){
            p1ScoreValue++;
            p1Score.innerText = p1ScoreValue;
            console.log(p1ScoreValue)
        }
      
    }

    // increase player two score count
    if(e.target.id === 'player2Btn'){
        if(p2ScoreValue < maxScore){
            p2ScoreValue++;
            p2Score.innerText = p2ScoreValue;
        }
    }

    // reset the player scores
    if(e.target.id === 'reset'){
        resetScoreBoard();
    }
})

// function to reset the score 
function resetScoreBoard() {
    p1ScoreValue = 0;
    p2ScoreValue = 0;
    p1Score.innerText = p1ScoreValue;
    p2Score.innerText = p2ScoreValue;
}

gameLimit.addEventListener('change', function(e){
    maxScore = Number(e.target.value);
    resetScoreBoard();
    console.log(typeof maxScore);
})