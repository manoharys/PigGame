//caching the dom

//final scores of the player one
let finalScore_1 = document.getElementById('finalScore-0');
//console.log(finalScore_1.innerHTML);

//final score of the second player.
let finalScore_2 = document.getElementById('finalScore-1');
//console.log(finalScore_2.innerHTML);

//New game button
let newGame = document.getElementById('new-game');

//Rolling dice button
let rollDice = document.getElementById('roll-dice');

//Hold button 
let hold = document.getElementById('hold');

//current score
let currentScore_1 = document.getElementById("currentScore-0");
let currentScore_2 = document.getElementById("currentScore-1");

/*Array named 'score[]' to contain the scores of the player
  player one score in index 0 and second player score in index 1*/
let score = [0, 0];

//Players current scores
let  playerOneCurrent = currentScore_1.innerHTML;
let playerOneCurrentScore = parseInt(playerOneCurrent,10);


//Adding the event listener to the roll dice button..
rollDice.addEventListener('click', function () {
    //Generating the random number for throwing the dice 
    let random = Math.floor(Math.random() * 6) + 1;
    document.getElementById('img').src = './images/dice-' + random + '.png';
    
    //updating the random value to the current score until the player gets Number 1
    if (random !== 1) {
        //update the score
         playerOneCurrentScore += random;
    
    } else {
        //make the current score to zero and checkout to the next player
    }

})

//