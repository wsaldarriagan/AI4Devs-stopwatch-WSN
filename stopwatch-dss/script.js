// Timer variables
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

// Countdown variables
let countdownInterval;
let countdownSeconds = 0;
let countdownRunning = false;

// Timer functions
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    timerSeconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timer-display').textContent = 
        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// Countdown functions
function startCountdown() {
    if (!countdownRunning) {
        const input = document.getElementById('countdown-input');
        if (input.value > 0) {
            countdownSeconds = input.value * 60;
            countdownRunning = true;
            countdownInterval = setInterval(updateCountdown, 1000);
            updateCountdownDisplay();
        }
    }
}

function stopCountdown() {
    clearInterval(countdownInterval);
    countdownRunning = false;
}

function resetCountdown() {
    stopCountdown();
    countdownSeconds = 0;
    document.getElementById('countdown-input').value = '';
    updateCountdownDisplay();
}

function updateCountdown() {
    if (countdownSeconds > 0) {
        countdownSeconds--;
        updateCountdownDisplay();
    } else {
        stopCountdown();
        alert('Countdown finished!');
    }
}

function updateCountdownDisplay() {
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor((countdownSeconds % 3600) / 60);
    const seconds = countdownSeconds % 60;
    document.getElementById('countdown-display').textContent = 
        `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

// Event listeners
document.getElementById('timer-start').addEventListener('click', startTimer);
document.getElementById('timer-stop').addEventListener('click', stopTimer);
document.getElementById('timer-reset').addEventListener('click', resetTimer);
document.getElementById('countdown-start').addEventListener('click', startCountdown);
document.getElementById('countdown-stop').addEventListener('click', stopCountdown);
document.getElementById('countdown-reset').addEventListener('click', resetCountdown);

// Initialize displays
updateTimerDisplay();
updateCountdownDisplay();