//caching the dom

//final scores of the player one
let finalScore_1 = document.getElementById('finalScore-0');


//final score of the second player.
let finalScore_2 = document.getElementById('finalScore-1');

//New game button
let newGame = document.getElementById('new-game');

//Rolling dice button
let rollDice = document.getElementById('roll-dice');



//current score
let currentScore_1 = document.getElementById("currentScore-0");
let currentScore_2 = document.getElementById("currentScore-1");

//initialising the values....
init();

/*Array named 'score[]' to contain the scores of the player
  player one score in index 0 and second player score in index 1*/
let score = [0, 0];
let PlayerscurrentScore = 0;
let activePlayer = 0;

//making dice invisible before starting the game.
document.getElementById('img').style.display='none';


//Adding the event listener to the roll dice button..
rollDice.addEventListener('click', function () {
    //Generating the random number for throwing the dice 
    let random = Math.floor(Math.random() * 6) + 1;
    document.getElementById('img').src = './images/dice-' + random + '.png';
    
    //making dice visible
    document.getElementById('img').style.display='inline-block';
    //updating the random value to the current score until the player gets Number 1
    if (random !== 1) {
        //update the score
        PlayerscurrentScore += random;
        document.getElementById('currentScore-' + activePlayer).textContent = PlayerscurrentScore;
        document.getElementById('active-' + activePlayer).style.display = 'inline-block';
    } else {
        //Next players turn
        nextPlayer();
    }
});

/*Adding EventListner to the hold function 
  Which basically adds the total current score to the finalScore or mainScore.*/
 
  document.getElementById('hold-btn').addEventListener('click',function(){
      score[activePlayer] += PlayerscurrentScore;
      document.getElementById('finalScore-'+activePlayer).innerHTML = score[activePlayer];
      if(score[activePlayer]>=10){
          document.getElementById('playerName-'+activePlayer).innerHTML = "WINNER!!!";
          PlayerscurrentScore = 0;
          document.getElementById('img').style.display='none';
          rollDice.style.cursor='no-drop';
          document.getElementById('inputBtn').style.pointerEvents='none';
          document.getElementById('hold-btn').style.cursor='no-drop';
          
      }else{
          nextPlayer();
      }  
  });

//Adding a eventListener the newGame button
document.getElementById('new-game').addEventListener('click',function(){
    init();
})


//init function 
function init() {
    finalScore_1.innerHTML = 0;
    finalScore_2.innerHTML = 0;
    currentScore_1.innerHTML = 0;
    currentScore_2.innerHTML = 0;
}

//Next player function
  function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    PlayerscurrentScore = 0;
    currentScore_1.textContent = '0';
    currentScore_2.textContent = '0';
    document.getElementById('active-0').style.display = 'none';
    document.getElementById('active-1').style.display = 'none';
    document.getElementById('img').style.display='none';
  }

