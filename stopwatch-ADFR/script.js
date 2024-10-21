// Page Navigation
document.getElementById("stopwatch-btn").addEventListener("click", function () {
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("stopwatch-page").classList.remove("hidden");
});

document.getElementById("countdown-btn").addEventListener("click", function () {
    document.getElementById("main-page").classList.add("hidden");
    document.getElementById("countdown-page").classList.remove("hidden");
});

document.getElementById("back-to-main-from-stopwatch").addEventListener("click", function () {
    document.getElementById("stopwatch-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
});

document.getElementById("back-to-main-from-countdown").addEventListener("click", function () {
    document.getElementById("countdown-page").classList.add("hidden");
    document.getElementById("main-page").classList.remove("hidden");
});

// Stopwatch Logic
let stopwatchInterval;
let stopwatchMilliseconds = 0;

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((stopwatchMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((stopwatchMilliseconds % (1000 * 60)) / 1000);
    const milliseconds = stopwatchMilliseconds % 1000;

    document.getElementById("stopwatch-display").innerText = 
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("milliseconds").innerText = milliseconds.toString().padStart(3, "0");
}

document.getElementById("start-stopwatch").addEventListener("click", function () {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(function () {
            stopwatchMilliseconds += 10;
            updateStopwatchDisplay();
        }, 10);
    }
});

document.getElementById("reset-stopwatch").addEventListener("click", function () {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchMilliseconds = 0;
    updateStopwatchDisplay();
});

// Countdown Logic
let countdownTime = 0;
let countdownInterval = null;
let countdownMilliseconds = 0;
let countdownInput = "";

// Update Countdown Display
function updateCountdownDisplay() {
    const hours = Math.floor(countdownMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((countdownMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdownMilliseconds % (1000 * 60)) / 1000);
    const milliseconds = countdownMilliseconds % 1000;

    document.getElementById("countdown-display").innerText = 
        `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("milliseconds-countdown").innerText = milliseconds.toString().padStart(3, "0");
}

// Capture countdown number input (digits are entered from right to left)
document.querySelectorAll(".number-buttons button").forEach(function (button) {
    button.addEventListener("click", function () {
        if (countdownInput.length < 6) {
            countdownInput += button.innerText;
            let paddedInput = countdownInput.padStart(6, "0");

            // Update the countdown display based on the input
            let hours = paddedInput.substring(0, 2);
            let minutes = paddedInput.substring(2, 4);
            let seconds = paddedInput.substring(4, 6);

            document.getElementById("countdown-display").innerText = `${hours}:${minutes}:${seconds}`;
        }
    });
});

// Set the countdown time
document.getElementById("set-countdown").addEventListener("click", function () {
    if (countdownInput.length > 0) {
        let paddedInput = countdownInput.padStart(6, "0");
        let hours = parseInt(paddedInput.substring(0, 2));
        let minutes = parseInt(paddedInput.substring(2, 4));
        let seconds = parseInt(paddedInput.substring(4, 6));

        // Convert hours, minutes, and seconds to milliseconds
        countdownMilliseconds = ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;

        // Update display with the set value
        updateCountdownDisplay();

        // Show the countdown control buttons (start, reset)
        document.getElementById("countdown-control").classList.remove("hidden");
    }
});

// Start the countdown
document.getElementById("start-countdown").addEventListener("click", function () {
    if (!countdownInterval) {
        countdownInterval = setInterval(function () {
            if (countdownMilliseconds > 0) {
                countdownMilliseconds -= 10;
                updateCountdownDisplay();
            } else {
                clearInterval(countdownInterval);
                countdownInterval = null;
                alert("Time is up!");
            }
        }, 10);
        document.getElementById("start-countdown").innerText = "Pause";
    } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        document.getElementById("start-countdown").innerText = "Start";
    }
});

// Reset the countdown
document.getElementById("reset-countdown").addEventListener("click", function () {
    clearInterval(countdownInterval);
    countdownInterval = null;
    countdownInput = "";
    countdownMilliseconds = 0;
    updateCountdownDisplay();
    document.getElementById("start-countdown").innerText = "Start";
    document.getElementById("countdown-control").classList.add("hidden");
});
