let mode = "";
let stopwatchInterval, countdownInterval;
let stopwatchTime = 0;
let countdownTime = 0;
let initialCountdownTime = 0;
let isCountingDown = false;
let milliseconds = 0; // For millisecond tracking

// Utility functions
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function formatMilliseconds(ms) {
  return String(ms % 1000).padStart(3, "0"); // Return the millisecond part only
}

function showView(viewId) {
  document.getElementById("mode-selection").classList.add("hidden"); // Hide mode selection when any mode is shown
  document
    .querySelectorAll('div[id$="-view"]')
    .forEach((view) => view.classList.add("hidden"));
  document.getElementById(viewId).classList.remove("hidden");
}

// Mode selection
document.getElementById("stopwatch-btn").addEventListener("click", () => {
  mode = "stopwatch";
  showView("stopwatch-view");
});

document.getElementById("countdown-btn").addEventListener("click", () => {
  mode = "countdown-setup";
  showView("countdown-setup-view");
});

// Stopwatch functionality
document
  .getElementById("start-stopwatch")
  .addEventListener("click", function () {
    if (this.innerText === "Start") {
      this.innerText = "Pause";
      this.classList.replace("bg-green-500", "bg-blue-500");
      stopwatchInterval = setInterval(() => {
        stopwatchTime += 100;
        milliseconds = formatMilliseconds(stopwatchTime);
        document.getElementById("stopwatch-display").innerText =
          formatTime(stopwatchTime);
        document.getElementById("stopwatch-milliseconds").innerText =
          milliseconds;
      }, 100);
    } else if (this.innerText === "Pause") {
      clearInterval(stopwatchInterval);
      this.innerText = "Continue";
    } else {
      this.innerText = "Pause";
      stopwatchInterval = setInterval(() => {
        stopwatchTime += 100;
        milliseconds = formatMilliseconds(stopwatchTime);
        document.getElementById("stopwatch-display").innerText =
          formatTime(stopwatchTime);
        document.getElementById("stopwatch-milliseconds").innerText =
          milliseconds;
      }, 100);
    }
  });

document.getElementById("clear-stopwatch").addEventListener("click", () => {
  stopwatchTime = 0;
  milliseconds = "000";
  document.getElementById("stopwatch-display").innerText =
    formatTime(stopwatchTime);
  document.getElementById("stopwatch-milliseconds").innerText = milliseconds;
});

// Countdown input functionality
let countdownInput = "";

document.querySelectorAll(".countdown-num").forEach((btn) => {
  btn.addEventListener("click", () => {
    countdownInput += btn.getAttribute("data-value");
    const time = parseInt(countdownInput, 10) || 0;
    document.getElementById("countdown-input-display").innerText = formatTime(
      time * 1000
    );
  });
});

document
  .getElementById("clear-countdown-input")
  .addEventListener("click", () => {
    countdownInput = "";
    document.getElementById("countdown-input-display").innerText = "00:00:00";
  });

document.getElementById("set-countdown").addEventListener("click", () => {
  countdownTime = parseInt(countdownInput, 10) * 1000 || 0;
  initialCountdownTime = countdownTime;
  showView("countdown-view");
  document.getElementById("countdown-display").innerText =
    formatTime(countdownTime);
  document.getElementById("countdown-milliseconds").innerText = "000";
});

// Countdown functionality
document
  .getElementById("start-countdown")
  .addEventListener("click", function () {
    if (!isCountingDown) {
      isCountingDown = true;
      this.innerText = "Pause";
      this.classList.replace("bg-green-500", "bg-blue-500");
      countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
          countdownTime -= 100;
          milliseconds = formatMilliseconds(countdownTime);
          document.getElementById("countdown-display").innerText =
            formatTime(countdownTime);
          document.getElementById("countdown-milliseconds").innerText =
            milliseconds;
        } else {
          clearInterval(countdownInterval);
          new Audio("https://www.soundjay.com/button/beep-07.wav").play();
          this.innerText = "Start";
          this.classList.replace("bg-blue-500", "bg-green-500");
          isCountingDown = false;
        }
      }, 100);
    } else {
      clearInterval(countdownInterval);
      this.innerText = "Continue";
      isCountingDown = false;
    }
  });

document.getElementById("clear-countdown").addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdownTime = initialCountdownTime;
  document.getElementById("countdown-display").innerText =
    formatTime(countdownTime);
  document.getElementById("countdown-milliseconds").innerText = "000";
  document.getElementById("start-countdown").innerText = "Start";
  document
    .getElementById("start-countdown")
    .classList.replace("bg-blue-500", "bg-green-500");
  isCountingDown = false;
});

// Back buttons functionality
document.getElementById("back-stopwatch").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatch-display").innerText =
    formatTime(stopwatchTime);
  document.getElementById("stopwatch-milliseconds").innerText = "000";
  showView("mode-selection");
});

document
  .getElementById("back-countdown-setup")
  .addEventListener("click", () => {
    countdownInput = "";
    document.getElementById("countdown-input-display").innerText = "00:00:00";
    showView("mode-selection");
  });

document.getElementById("back-countdown").addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdownTime = initialCountdownTime;
  document.getElementById("countdown-display").innerText =
    formatTime(countdownTime);
  document.getElementById("countdown-milliseconds").innerText = "000";
  showView("mode-selection");
});
