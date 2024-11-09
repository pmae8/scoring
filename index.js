// Initialize scores for Team A and Team B
let scoreA = 0;
let scoreB = 0;

// Initialize timer variables
let timer;
let seconds = 0;
let minutes = 0;
let isTimerRunning = false;

// Function to update the score of Team A or Team B
function incrementScore(team) {
    if (team === 'A') {
        scoreA++;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'B') {
        scoreB++;
        document.getElementById('scoreB').textContent = scoreB;
    }
}

// Function to decrease the score of Team A or Team B
function decrementScore(team) {
    if (team === 'A' && scoreA > 0) {
        scoreA--;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'B' && scoreB > 0) {
        scoreB--;
        document.getElementById('scoreB').textContent = scoreB;
    }
}

// Function to reset both scores to 0
function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
    resetTimer();
}

// Timer functions

// Start the timer
function startTimer() {
    if (isTimerRunning) return;  // Prevent starting the timer if it's already running

    isTimerRunning = true;
    timer = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        // Format time to MM:SS
        const formattedTime = formatTime(minutes) + ':' + formatTime(seconds);
        document.getElementById('timerDisplay').textContent = formattedTime;
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

// Reset the timer to 00:00
function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    minutes = 0;
    seconds = 0;
    document.getElementById('timerDisplay').textContent = '00:00';
}

// Helper function to format the time
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
