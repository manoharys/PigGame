# PigGame
Pig-game is a one of dices Games.

# Gameplay

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
<ul>
  <li>  If the player rolls a 1, they score nothing and it becomes the next player's turn.</li>
  <li>  If the player rolls any other number, it is added to their turn total and the player's turn continues.</li>
  <li>  If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.</li>
  <li>  The first player to score 100 or more points wins.</li>
</ul>

# For example,

the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, John, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score......
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Pig-game</title>
  <!-- custom css -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
 
    
      <div class="wrapper">
        <div id="player-1">
          <div class="player-score">
            <div class="playerName">Player 1</div>
            <!-- using finalScore-0 for player-1 bcoz scores are stored in array(array starts from 0) -->
            <div class="playerScore" id="finalScore-0">10</div>
          </div>
          <div class="player-currentScore">
            <h4>current</h4>
            <div class="" id="currentScore">11</div>
          </div>
        </div>

        <div id="player-2">
          <div class="player-score">
            <div class="playerName">Player 1</div>
            <!-- using finalScore-0 for player-2 bcoz scores are stored in array(array starts from 0) -->
            <div class="playerScore" id="finalScore-1">20</div>
          </div>
          <div class="player-currentScore">
            <h4>current</h4>
            <div class="" id="currentScore">11</div>
          </div>
        </div>
     

    </div>
 
  <div class="game-play">
    <div class="newgame">
      <span><button>New game</button></span>
    </div>
    <div class="images">
      <img src="./images/dice-1.png" alt="">
    </div>
    <div class="rollDice">
      <span><button>roll dice</button></span>
    </div>
    <div class="Hold">
      <span><button>Hold</button></span>
    </div>
  </div>
</body>
<!-- js file -->
<script src="app.js"></script>

</html>
