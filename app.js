//Variables 
const secretNumber = document.querySelector('.secret-number');
const phrase = document.querySelector('.message');
const checkBtn = document.querySelector('.check-btn');
const resetBtn = document.querySelector('.again-btn');
let scoreHTML = document.querySelector('.score');
let highScoreHTML = document.querySelector('.highscore')
let score = 20;
let highScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;


//Functions
const gamePlay = function () {
    //created a variable that targets the users input 
    const userGuess = Number(document.querySelector('.guess').value);
    //if user inputs 0 or a number outside of 1-20 then shows an error message.
    if (userGuess === 0 || userGuess < 0 || userGuess > 20) {
        phrase.innerHTML = '⛔️<br>Sorry, Please enter<br>number between 1 and 20'
        //If the user guesses correct 
    } else if (userGuess === randomNumber) {
        if (score > highScore) {
            highScoreHTML.innerHTML = score;
        }
        secretNumber.innerHTML = randomNumber
        phrase.innerHTML = '🥳 Yay! Thats Correct<br>You win!'
        document.body.style.backgroundColor = 'green';
        document.body.style.backgroundImage = 'none';
        //if the user guesses too high or too low
    } else if (userGuess > randomNumber || userGuess < randomNumber) {
        if (score > 1) {
            score--;
            phrase.innerHTML = userGuess > randomNumber ? '🙁 <br>Too high! Try Again!' : '🙁 <br>Too low! Try Again!'
            scoreHTML.innerHTML = score;
        } // when user runs out of lives
        else {
            phrase.innerHTML
                = 'Whoops, You Lose. SOZ😛'
            scoreHTML.innerHTML = 0;
            document.body.style.backgroundColor = 'red';

        }

    }

}

//Reset Button 
const gameReset = function () {
    phrase.innerHTML = 'Start guessing...'
    score = 20
    scoreHTML.innerHTML = score;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = 'lightpink';
    secretNumber.innerHTML = '?'
}


//Event Listeners 

checkBtn.addEventListener('click', gamePlay);
resetBtn.addEventListener('click', gameReset);

