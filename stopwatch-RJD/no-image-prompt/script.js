function pad(number, digits = 2) {
    return number.toString().padStart(digits, '0');
}

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function formatMilliseconds(ms) {
    return pad(ms % 1000, 3);
}

let startTime, elapsedTime = 0, intervalId, running = false;

function setupEventListeners() {
    const timerDisplay = document.querySelector('.timer');
    const millisecondsDisplay = document.querySelector('.milliseconds');
    const startStopButton = document.querySelector('.start-stop');
    const resetButton = document.querySelector('.reset');

    function updateTimer() {
        const now = Date.now();
        elapsedTime = now - startTime;

        timerDisplay.textContent = formatTime(elapsedTime);
        millisecondsDisplay.textContent = formatMilliseconds(elapsedTime);
    }

    startStopButton.addEventListener('click', () => {
        if (running) {
            clearInterval(intervalId);
            running = false;
            startStopButton.textContent = 'Start';
            startStopButton.classList.remove('stop');
        } else {
            startTime = Date.now() - elapsedTime;
            intervalId = setInterval(updateTimer, 10);
            running = true;
            startStopButton.textContent = 'Stop';
            startStopButton.classList.add('stop');
        }
    });

    resetButton.addEventListener('click', () => {
        clearInterval(intervalId);
        elapsedTime = 0;
        timerDisplay.textContent = '00:00:00';
        millisecondsDisplay.textContent = '000';
        startStopButton.textContent = 'Start';
        startStopButton.classList.remove('stop');
        running = false;
    });
}

// Run setup only when the DOM is fully loaded (in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing
module.exports = { formatTime, formatMilliseconds, pad, setupEventListeners };