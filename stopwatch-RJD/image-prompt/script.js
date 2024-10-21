// script.js
let startTime;
let running = false;
let animationFrameId;

function formatTime(ms) {
    const date = new Date(ms);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    return {
        main: `${hours}:${minutes}:${seconds}`,
        ms: milliseconds
    };
}

function updateDisplay() {
    if (running) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const formattedTime = formatTime(elapsedTime);
        display.textContent = formattedTime.main;
        msDisplay.textContent = formattedTime.ms;
        animationFrameId = requestAnimationFrame(updateDisplay);
    }
}

// Expose handler functions globally
window.startBtnHandler = function() {
    if (!running) {
        running = true;
        startTime = Date.now() - (parseFloat(display.textContent.replace(/:/g, '')) * 1000 || 0);
        startBtn.textContent = 'Stop';
        startBtn.classList.add('stop');
        updateDisplay();
    } else {
        running = false;
        startBtn.textContent = 'Start';
        startBtn.classList.remove('stop');
        cancelAnimationFrame(animationFrameId);
    }
};

window.clearBtnHandler = function() {
    running = false;
    display.textContent = '00:00:00';
    msDisplay.textContent = '000';
    startBtn.textContent = 'Start';
    startBtn.classList.remove('stop');
    cancelAnimationFrame(animationFrameId);
};

// Initialize when DOM is loaded
function initStopwatch() {
    window.display = document.getElementById('display');
    window.msDisplay = document.getElementById('ms');
    window.startBtn = document.getElementById('startBtn');
    window.clearBtn = document.getElementById('clearBtn');

    if (startBtn && clearBtn) {
        startBtn.addEventListener('click', window.startBtnHandler);
        clearBtn.addEventListener('click', window.clearBtnHandler);
    }
}

// Wait for DOM to be loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStopwatch);
} else {
    initStopwatch();
}