/* =====================================================
   Click Challenge - Your Unit 10 Project
   =====================================================

   Your mission: Build a click-challenge browser game!
   ===================================================== */

// =====================================================
// STEP 1: State variables + DOM references
// =====================================================
// game state
let score = 0;
let highScore = 0;
let gameOver = true;
let timeLeft = 10;
let timerId;

// Bonus variables (Streak bonus)
let lastClickTime = 0;
let streakCount = 0;

// DOM references
let startBtn = document.getElementById("startBtn");
let targetBtn = document.getElementById("targetBtn");
let resetBtn = document.getElementById("resetBtn");
let highScoreDisplay = document.getElementById("highScoreDisplay");
let message = document.getElementById("message");
let timerDisplay = document.getElementById("timerDisplay");
let scoreDisplay = document.getElementById("scoreDisplay");

// =====================================================
// STEP 2: Write the startGame function
// =====================================================
function startGame() {
  if (timerId) {
    clearInterval(timerId);
  }
  
  score = 0;
  timeLeft = 10;
  gameOver = false;
  streakCount = 0;
  lastClickTime = 0;
  
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  timerDisplay.classList.remove("urgent");
  
  message.textContent = "Go go go!";
  message.className = "message playing";
  
  targetBtn.disabled = false;
  startBtn.disabled = true;

  // =====================================================
  // STEP 3: Write the countdown timer
  // =====================================================
  timerId = setInterval(function() {
    timeLeft = timeLeft - 1;
    timerDisplay.textContent = timeLeft;
    
    // Make the timer red when time is low
    if (timeLeft <= 3) {
      timerDisplay.classList.add("urgent");
    }
    
    // End the game when time hits zero
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// =====================================================
// STEP 4: Write the endGame function
// =====================================================
function endGame() {
  gameOver = true;
  clearInterval(timerId);
  
  targetBtn.disabled = true;
  startBtn.disabled = false;
  timerDisplay.classList.remove("urgent");
  
  if (score > highScore) {
    highScore = score;
    highScoreDisplay.textContent = highScore;
    message.textContent = `New high score! ${score} clicks!`;
    message.className = "message win";
  } else {
    message.textContent = `Time's up! You got ${score} clicks.`;
    message.className = "message";
  }
}

// =====================================================
// STEP 5: Wire up the click handlers
// =====================================================
targetBtn.addEventListener("click", function() {
  if (gameOver) return; // GUARD: don't count clicks after game ends
  
  // BONUS 3: Click streak bonus
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime <= 200) {
    streakCount++;
  } else {
    streakCount = 1;
  }
  lastClickTime = currentTime;
  
  if (streakCount >= 5) {
    score += 5;
    message.textContent = "Streak! +5 Points!";
    message.className = "message win";
    streakCount = 0; // Reset streak so they have to earn it again
  } else {
    score += 1;
  }
  
  scoreDisplay.textContent = score;
});

startBtn.addEventListener("click", startGame);

resetBtn.addEventListener("click", function() {
  if (timerId) clearInterval(timerId);
  gameOver = true;
  score = 0;
  timeLeft = 10;
  streakCount = 0;
  lastClickTime = 0;
  
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;
  timerDisplay.classList.remove("urgent");
  
  message.textContent = "Click Start to begin!";
  message.className = "message";
  
  targetBtn.disabled = true;
  startBtn.disabled = false;
});
