let secretNumber = Math.floor(Math.random() * 10) + 1;

const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");

guessBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  if (!userGuess) {
    result.textContent = "Type a number first.";
    return;
  }

  if (userGuess === secretNumber) {
    result.textContent = "✅ Correct! You guessed the number.";
  } else if (userGuess > secretNumber) {
    result.textContent = "Too high. Try again.";
  } else {
    result.textContent = "Too low. Try again.";
  }
});
