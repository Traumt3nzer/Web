// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    attempts++;

    // Check the user's guess
    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number.";
    } else if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }
}

// Add event listener to trigger the checkGuess function when Enter key is pressed
document.getElementById('guessInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
