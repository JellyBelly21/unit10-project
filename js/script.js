/* =====================================================
   Click Challenge - Your Unit 10 Project
   =====================================================

   Your mission: Build a click-challenge browser game!

   The default scaffold is a Click Challenge:
   - User has 10 seconds to click the target as much as possible
   - Score goes up with each click
   - Timer counts down every second
   - Game ends when time hits zero
   - High score is tracked across rounds

   You can also build YOUR OWN game. Some ideas:
   - Reaction Timer (click as fast as possible after "GO!")
   - Memory Match (flip cards, find pairs)
   - Number Guesser V2 (with timer and score)
   - Dodge Game (move to avoid stuff)
   - Quiz with timer
   - Mini RPG with turns

   Requirements:
   - Track 3+ game state variables
   - Use 2+ conditionals (win/lose logic)
   - Use setTimeout or setInterval for timing
   - Respond to user input
   - Update DOM as game state changes
   - Include a reset/replay function
   - Use functions for clean code
   ===================================================== */


// =====================================================
// STEP 1: State variables + DOM references
// =====================================================
// Hint: Game state goes at the TOP of your script.
// You need:
// - score (starts at 0)
// - timeLeft (starts at 10)
// - gameOver (starts at true so game doesn't start automatically)
// - highScore (starts at 0)
// - timerId (will hold our setInterval id later)
//
// Also grab references to all the DOM elements you need:
// - targetBtn, startBtn, resetBtn
// - scoreDisplay, timerDisplay, highScoreDisplay, message
//
// Write your code here:




// =====================================================
// STEP 2: Write the startGame function
// =====================================================
// Hint: startGame should reset all the state for a new round:
// 1. Clear any existing timer (if timerId) clearInterval(timerId);
// 2. Reset score to 0, timeLeft to 10, gameOver to false
// 3. Update the DOM (scoreDisplay, timerDisplay)
// 4. Update the message ("Go go go!" or similar)
// 5. Enable the target button, disable the start button
// 6. Start the countdown timer (Step 3)
//
// Write your code here:




// =====================================================
// STEP 3: Write the countdown timer
// =====================================================
// Inside startGame (after resetting state), start the interval:
//
// timerId = setInterval(function() {
//   timeLeft = timeLeft - 1;
//   timerDisplay.textContent = timeLeft;
//
//   // Make the timer red when time is low (bonus visual!)
//   if (timeLeft <= 3) {
//     timerDisplay.classList.add("urgent");
//   }
//
//   // End the game when time hits zero
//   if (timeLeft <= 0) {
//     endGame();
//   }
// }, 1000);
//
// Write your code here (still inside startGame):




// =====================================================
// STEP 4: Write the endGame function
// =====================================================
// Hint: endGame should:
// 1. Set gameOver to true
// 2. Stop the timer with clearInterval(timerId)
// 3. Disable the target button, enable the start button
// 4. Remove the .urgent class from timerDisplay
// 5. Check if score beat the high score, update if so
// 6. Show a message ("Time's up! You scored X points!")
//
// Example:
// function endGame() {
//   gameOver = true;
//   clearInterval(timerId);
//   targetBtn.disabled = true;
//   startBtn.disabled = false;
//   timerDisplay.classList.remove("urgent");
//
//   if (score > highScore) {
//     highScore = score;
//     highScoreDisplay.textContent = highScore;
//     message.textContent = `New high score! ${score} clicks!`;
//   } else {
//     message.textContent = `Time's up! You got ${score} clicks.`;
//   }
//   message.className = "message win";
// }
//
// Write your endGame function here:




// =====================================================
// STEP 5: Wire up the click handlers
// =====================================================
// Hint:
// 1. targetBtn click: if not gameOver, increment score, update display
// 2. startBtn click: call startGame
// 3. resetBtn click: clear everything, set message back to "Click Start to begin!"
//
// Example for targetBtn:
// targetBtn.addEventListener("click", function() {
//   if (gameOver) return;   // GUARD: don't count clicks after game ends
//   score = score + 1;
//   scoreDisplay.textContent = score;
// });
//
// Write your three event listeners here:




// =====================================================
// BONUS CHALLENGES (Pick at least 1!)
// =====================================================
//
// BONUS 1: Difficulty selector
// Add a dropdown to choose 5s/10s/20s rounds. Read the value
// in startGame to set timeLeft.
//
//
// BONUS 2: Moving target
// In each click handler, move the targetBtn to a random position
// using style.position = "absolute" and random top/left values.
// Makes the game harder!
//
//
// BONUS 3: Click streak bonus
// Track consecutive clicks within 200ms of each other. After 5
// in a row, give a "Streak!" bonus and add 5 points instead of 1.
//
//
// BONUS 4: Sound effects
// Use new Audio("path/to/sound.mp3").play() on each click
// and at game end. You can find free sound effects online.



// =====================================================
// DONE! Save and open index.html.
// Test:
// - Click Start - timer counts down from 10
// - Click the target - score goes up
// - When time hits 0 - game ends, target disabled
// - High score updates if you beat it
// - Click Reset - everything goes back to fresh
// - Time turns red and pulses when at 3 seconds or less
//
// You built a real game! \ud83c\udfae
// =====================================================
