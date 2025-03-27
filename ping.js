const p1Score = document.querySelector('#playerOneScore');
const p2Score = document.querySelector('#playerTwoScore');
const gameLimit = document.querySelector('#game-limit');
const p1Btn = document.querySelector('#player1Btn');
const p2Btn = document.querySelector('#player2Btn');
const btnsContainer = document.querySelector('#buttons');
const instruction = document.querySelector('#instruction')

let maxScore= Number(gameLimit.value);
let p1ScoreValue= Number(p1Score.textContent);
let p2ScoreValue = Number(p2Score.textContent);

// console.log(typeof maxScore)
// using event delegation
btnsContainer.addEventListener('click', function(e) {
    // increase player one score count
    if(e.target.id === 'player1Btn'){
        console.log(`${maxScore} is the maxScore at the beginning`);
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

    //player1  wins
    if(p1ScoreValue === maxScore){
        // if player one wins
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
        //disable the other buttons except the reset button
        p1Btn.disabled = true;
        p2Btn.disabled = true;

        //output text to help user
        instruction.innerText = `GAME OVER! \nPLAYER ONE WINS\n RESTART THE GAME`;

        console.log(`${maxScore} is the maxScore after p1 wins`);

    }
    // player 2 wins
    else if (p2ScoreValue === maxScore){
        p2Score.style.color = 'green';
        p1Score.style.color =  ' red';
        p1Btn.disabled = true;
        p2Btn.disabled = true;

        instruction.innerText = `GAME OVER! \nPLAYER TWO WINS\n RESTART THE GAME`;
        console.log(`${maxScore} is the maxScore after p2 wins`);
    }



    // reset the player scores
    if(e.target.id === 'reset'){
        // resetScoreBoard();
        window.location.reload();
    }
})


// function to reset the score - I tried to use this logic but there was a bug I could not fix so I'm going to make the reset button refresh the page
// the bug is that the p1+ and p2+ increment click events dont work after this resetScoreBoard function is invoked, only after a user wins.
// function resetScoreBoard() {
//     p1ScoreValue = 0;
//     p2ScoreValue = 0;
//     p1Score.innerText = p1ScoreValue;
//     p2Score.innerText = p2ScoreValue;
//     instruction.innerText = 'use the buttons below to keep track of the scores';
//     p1Score.style.color = 'white';
//     p2Score.style.color = 'white';
// }

gameLimit.addEventListener('change', function(e){
    maxScore = Number(e.target.value);
    resetScoreBoard();
})