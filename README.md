# Click Challenge - Unit 10 Project

Your Unit 10 project — build a real browser game! 🎮

## Getting Started

1. **Clone this repo** to your computer
2. Open the folder in your editor
3. Open `index.html` in a browser

The HTML and CSS are already built. Your job is to write all the game logic — state management, timer, win/lose conditions, and reset.

## What You're Building

A **Click Challenge** game:
- User clicks "Start" — a 10-second timer starts counting down
- User clicks the target button as fast as they can
- Score goes up with each click
- When time hits 0, the game ends and shows the final score
- If they beat the high score, that gets updated too
- "Reset" button clears everything for a fresh start
- Timer turns red and pulses when at 3 seconds or less (visual urgency!)

### Or build something else!

You can build your own game instead. Some ideas:

| Game | What state to track |
|---|---|
| Reaction Timer | startTime, reactionTime, gameOver |
| Memory Match | flippedCards array, matchedCount, attempts |
| Number Guesser V2 | target, guessesLeft, timeLeft, gameOver |
| Dodge Game | playerX, obstacleX, score, gameOver |
| Quiz with timer | currentQuestion, score, timeLeft, gameOver |
| Mini RPG | playerHP, enemyHP, turn, gameOver |

If you build your own, just hit the requirements:
- 3+ state variables
- 2+ conditionals (win/lose logic)
- setTimeout or setInterval
- User input
- DOM updates
- Reset/replay function

## Files

- `index.html` — done for you, has stats display, target button, controls
- `css/styles.css` — done for you, green gradient, includes `.urgent` class for low-time effect
- `js/script.js` — has 5 numbered steps with hints + 4 bonus options
- `README.md` — what you're reading right now

## What You'll Use

This project pulls together pretty much everything you've learned:
- **State variables** (Unit 10): score, timeLeft, gameOver, etc.
- **Conditionals** (Unit 3): win/lose checks, guard clauses
- **Functions** (Unit 4): startGame, endGame
- **Event listeners** (Unit 6): click handlers
- **DOM updates** (Unit 6): textContent, classList
- **Timers** (Unit 10): setInterval for countdown, clearInterval to stop
- **Template literals** (Unit 2): building messages

## Stuck?

1. Open the browser console (F12) — errors live there
2. Timer keeps running after time hits 0? You forgot `clearInterval(timerId)` in endGame
3. Score keeps going up after game ends? You forgot `if (gameOver) return;` in your click handler
4. Reset doesn't fully reset? Make sure startGame resets EVERY state variable
5. Timer goes twice as fast after a reset? You need to call clearInterval BEFORE starting a new interval
6. Game doesn't start? Check the console. Make sure the startBtn event listener is attached
7. Go back to your Unit 10 codealong file and student handout

## When You're Done

Open your index.html and test:
- ✅ Click Start — timer counts down from 10, second by second
- ✅ Click the target — score goes up each click
- ✅ Time hits 0 — game ends, target gets disabled
- ✅ Final message shows your score
- ✅ High score updates if you beat it
- ✅ Click Reset — everything goes back to fresh
- ✅ Time turns RED and pulses when at 3 seconds or less

🏆 **This is your final unit. Congratulations on making it to the end!**

You've built a real interactive game from scratch. Real game logic, real state management, real timers. The kind of code that powers actual web games. 🎮

Have fun! 🚀
