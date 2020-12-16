let userScore = 0;
let compScore = 0;
let named = document.getElementById("name");
const USERSCORE_SPAN = document.getElementById("user-score");
const COMPSCORE_SPAN = document.getElementById("comp-score");
const SCOREBOARD_DIV = document.querySelector(".score-board");
const CHOICENOTE_P = document.querySelector(".comp-choice-note");
const RESULT_P = document.querySelector(".win-loss-note");
const ROCK_IMG = document.getElementById("rock");
const PAPER_IMG = document.getElementById("paper");
const SISSORS_IMG = document.getElementById("sissors");

function name() {
  let userName = prompt("Choose a name between 4 letter's(more than that are not expectable!) or ignore this for random name 'user'!Thank you!");

  if (userName == null) {
    named.innerHTML = "user";
  }
  else if (userName.length <= 0) {
    named.innerHTML = "user";
  }
  else if (userName.length < 5) {
    named.innerHTML = userName;
  }

  else {
    named.innerHTML = "user";
  }

}
name();

function win(userChoices, COMPCHOICE) {
  userScore++
  USERSCORE_SPAN.innerHTML = userScore;
  COMPSCORE_SPAN.innerHTML = compScore;
  CHOICENOTE_P.innerHTML = "Computer choose " + getCompChoices();
  RESULT_P.innerHTML = " You Won! 😋";
  document.getElementById(userChoices).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoices).classList.remove("green-glow"), 400);
    
}

function lost(userChoices, COMPCHOICE) {
  compScore++
  COMPSCORE_SPAN.innerHTML = compScore
  USERSCORE_SPAN.innerHTML = userScore;
  CHOICENOTE_P.innerHTML = "Computer choose " + getCompChoices();
  RESULT_P.innerHTML = " Computer won! 😭"
  document.getElementById(userChoices).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoices).classList.remove("red-glow"), 400);
}

function draw(userChoices, COMPCHOICE) {
  COMPSCORE_SPAN.innerHTML = compScore
  USERSCORE_SPAN.innerHTML = userScore;
  CHOICENOTE_P.innerHTML = "Computer choose " + getCompChoices();
  RESULT_P.innerHTML = " it's a draw..! 😤"
  document.getElementById(userChoices).classList.add('blue-glow');
  setTimeout(() => document.getElementById(userChoices).classList.remove("blue-glow"), 400);

}


function getCompChoices() {
  const CHOICES = ['rock', 'paper', 'sissors'];
  const RANDOM_NUMBERS = Math.floor(Math.random() * 3);
  return CHOICES[RANDOM_NUMBERS];
}

function game(userChoices) {
  const COMPCHOICE = getCompChoices();
  switch (userChoices + COMPCHOICE) {
    case "rocksissors":
    case "paperrock":
    case "sissorspaper":
      win(userChoices, COMPCHOICE);
      break;
    case "rockpaper":
    case "papersissors":
    case "sissorsrock":
      lost(userChoices, COMPCHOICE);
      break;
    case "rockrock":
    case "paperpaper":
    case "sissorssissors":
      draw(userChoices, COMPCHOICE);
      break;
  }

}

function main() {
  ROCK_IMG.addEventListener("click", function() {
    game("rock");
  })
  PAPER_IMG.addEventListener("click", function() {
    game("paper");
  })
  SISSORS_IMG.addEventListener("click", function() {
    game("sissors");

  })
}
main();

/*function finished() {
  if (userScore == 10) {
    alert(named + " have won the game !🥳🥳");
  }
  else if(compScore == 10) {
    alert(named + " have won the game !😢😢");
  }
  else {
    
  }
}
finished();*/