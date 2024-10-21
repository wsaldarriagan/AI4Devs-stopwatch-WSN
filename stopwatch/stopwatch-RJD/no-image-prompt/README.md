
# Stopwatch Web Application

This project is a simple web-based stopwatch built with **HTML**, **CSS**, and **JavaScript**. It displays time in the format `HH:MM:SS` along with **milliseconds**. The project includes **Start/Stop** and **Clear** buttons, with the Start button changing color when active.

---

## Project Structure

```
stopwatch-project/
│
├── index.html       # HTML file for the web layout
├── script.js        # JavaScript logic for stopwatch functionality
├── script.test.js   # Unit tests for the stopwatch functionality
├── README.md        # Documentation of the project (this file)
└── package.json     # Dependencies for Jest
```

---

## How to Run the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser to run the stopwatch.

---

## How to Run Unit Tests

This project includes lightweight unit tests using **Jest**.

### Steps to Run Tests

1. Make sure **Node.js** is installed. If not, install it from [https://nodejs.org](https://nodejs.org).
2. Install Jest and JSDOM:

```bash
npm install
npm install jest-environment-jsdom --save-dev
```

3. Run the tests:

```bash
npm test
```

---

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
        }

        .timer-container {
            background-color: #d6e0f0;
            border: 4px solid #4a4a4a;
            border-radius: 10px;
            padding: 3px 10px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 80px;
        }

        .timer {
            font-size: 4.5em;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 1px;
            position: relative;
            margin-bottom: 5px;
        }

        .milliseconds {
            font-size: 1em;
            position: absolute;
            bottom: 4px;
            right: 10px;
            color: black;
        }

        .buttons-container {
            display: flex;
            justify-content: space-between;
            width: 320px;
            margin-top: 15px;
        }

        button {
            border-radius: 8px;
            padding: 15px 30px;
            border: 4px solid #4a4a4a;
            font-size: 1.2em;
            cursor: pointer;
            color: black;
            width: 140px;
            transition: background-color 0.3s;
        }

        .start-stop {
            background-color: #28a745;
            border-color: #3a3a3a;
        }

        .reset {
            background-color: rgba(255, 0, 0, 0.8);
            border-color: #4a4a4a;
        }

        .start-stop.stop {
            background-color: yellow;
        }

        button:focus {
            outline: none;
        }
    </style>
</head>
<body>
    <div class="timer-container">
        <div class="timer">00:00:00</div>
        <div class="milliseconds">000</div>
    </div>

    <div class="buttons-container">
        <button class="start-stop">Start</button>
        <button class="reset">Clear</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

---

## script.js

```javascript
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

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = { formatTime, formatMilliseconds, pad, setupEventListeners };
```

---

## script.test.js

```javascript
const { formatTime, formatMilliseconds, pad, setupEventListeners } = require('./script');

beforeEach(() => {
    document.body.innerHTML = `
        <div class="timer-container">
            <div class="timer">00:00:00</div>
            <div class="milliseconds">000</div>
        </div>
        <div class="buttons-container">
            <button class="start-stop">Start</button>
            <button class="reset">Clear</button>
        </div>
    `;

    setupEventListeners();
});

test('pad adds leading zeros to single-digit numbers', () => {
    expect(pad(5)).toBe('05');
    expect(pad(10)).toBe('10');
    expect(pad(0)).toBe('00');
});

test('formatTime formats milliseconds into HH:MM:SS', () => {
    expect(formatTime(0)).toBe('00:00:00');
    expect(formatTime(61000)).toBe('00:01:01');
    expect(formatTime(3661000)).toBe('01:01:01');
});

test('formatMilliseconds extracts the last three digits as milliseconds', () => {
    expect(formatMilliseconds(0)).toBe('000');
    expect(formatMilliseconds(123)).toBe('123');
    expect(formatMilliseconds(999)).toBe('999');
});
```

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).