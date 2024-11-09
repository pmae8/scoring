let scoreA = 0;
let scoreB = 0;

let timer;
let seconds = 0;
let minutes = 0;
let isTimerRunning = false;

function incrementScore(team) {
    if (team === 'A') {
        scoreA++;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'B') {
        scoreB++;
        document.getElementById('scoreB').textContent = scoreB;
    }
}

function decrementScore(team) {
    if (team === 'A' && scoreA > 0) {
        scoreA--;
        document.getElementById('scoreA').textContent = scoreA;
    } else if (team === 'B' && scoreB > 0) {
        scoreB--;
        document.getElementById('scoreB').textContent = scoreB;
    }
}

function resetScores() {
    scoreA = 0;
    scoreB = 0;
    document.getElementById('scoreA').textContent = scoreA;
    document.getElementById('scoreB').textContent = scoreB;
    resetTimer();
}


function startTimer() {
    if (isTimerRunning) return;

    isTimerRunning = true;
    timer = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
      
        const formattedTime = formatTime(minutes) + ':' + formatTime(seconds);
        document.getElementById('timerDisplay').textContent = formattedTime;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    minutes = 0;
    seconds = 0;
    document.getElementById('timerDisplay').textContent = '00:00';
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
