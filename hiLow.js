

  // Creating variable to hold the username value
var userName = ""

  // Function that runs when 'Start Game' button is clicked
function buttonStartGame() {
  // Creates a random number for the user to guess
  randomNumber = Math.floor((Math.random() * 10) + 1);
  // Puts user input from textbox into userName variable.
  var userName = document.getElementById('userGuess').value;
  // Create a variable called hint that links to our h2 tag
  var hint = document.getElementById('hint');
  // When 'start game' button is clicked, our h2 text(hint) is changed to the string
  var textChanger = document.getElementById('startGame');
    document.getElementById("hint").innerHTML = "Hi " + userName + ", Enter your guess from 1-100, if you dare.";
  // Clears the textbox for new guess
  document.getElementById('userGuess').value = "";
  guessCount = 6;

}

  // Function that runs game when 'guess' button is clicked
function game() {
  /* Generates random number to correspond with index of motivationalInspiration array */
  var randomMotivation = Math.floor(Math.random() * 7);
// Demotivational statements array
  var motivationalInspiration = ["All we ask here is that you give us your heart", "It could be that the purpose of your life is only to serve as a warning to others", "Some people never go crazy. What truly horrible lives they must lead.", "Don't try.", "Your outlook is bleak", "Just walk away.", "Hope may not be warranted at this point"];


  // Assigning the userGuess value(textbox input) to the variable guessNumber
  var guessNumber = document.getElementById('userGuess').value;
  // Create a local variable called hint so we can change our h2 text
  var hint = document.getElementById('hint');

  var demotivation = document.getElementById('motivation');
  // If guessCount is not 0, then run the comparison
  if(guessCount !== 0){
  // Checks if the user input is a number
     if (isNaN(guessNumber)) {
            hint.innerHTML = "Please put in a number";
            document.getElementById('userGuess').value = "";
            guessCount--;
          }
    // Checks if the guessNumber is less than the randomNumber
     if (parseInt(guessNumber) < randomNumber) {
            hint.innerHTML =  guessNumber + ": Guess is too low, try again. " + guessCount + " guesses left.";
            document.getElementById('userGuess').value = "";
            guessCount--;
            demotivation.innerHTML = motivationalInspiration[randomMotivation];

          }
    // Checks if the guessNumber is greater than the randomNumber
     if (parseInt(guessNumber) > randomNumber) {
            hint.innerHTML = guessNumber + ": Guess is too high, try again. " + guessCount + " guesses left.";
            document.getElementById('userGuess').value = "";
            guessCount--;
            demotivation.innerHTML = motivationalInspiration[randomMotivation];
          }
    // Checks if the guessNumber is equal to the randomNumber
     if (parseInt(guessNumber) === randomNumber) {
            hint.innerHTML = guessNumber + " was the right number! Grats!";
            document.getElementById('userGuess').value = "";
            guessCount--;

          }
        }
  // if guessCount *is* 0, then put this text in the H2 tag space
  else {
    hint.innerHTML = "You're all out of guesses - Try again by entering your name and hitting 'Start Game'!";
    document.getElementById('userGuess').value = "";
  }
}
