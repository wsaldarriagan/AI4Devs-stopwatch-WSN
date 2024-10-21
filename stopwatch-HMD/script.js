let stopwatchInterval;
let countdownInterval;
let stopwatchRunning = false;
let countdownRunning = false;

let stopwatchTime = { minutes: 0, seconds: 0, milliseconds: 0 };
let countdownTime = { minutes: 0, seconds: 0 };

// Función para actualizar la pantalla del cronómetro
function updateStopwatchDisplay() {
  const display = document.getElementById('stopwatchDisplay');
  const { minutes, seconds, milliseconds } = stopwatchTime;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
}

// Función para actualizar la pantalla de la cuenta regresiva
function updateCountdownDisplay() {
  const display = document.getElementById('countdownDisplay');
  const { minutes, seconds } = countdownTime;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:00`;
}

// Función del cronómetro
function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime.milliseconds += 10;

    if (stopwatchTime.milliseconds >= 1000) {
      stopwatchTime.milliseconds = 0;
      stopwatchTime.seconds++;
    }

    if (stopwatchTime.seconds >= 60) {
      stopwatchTime.seconds = 0;
      stopwatchTime.minutes++;
    }

    updateStopwatchDisplay();
  }, 10);
}

// Función para detener el cronómetro
function pauseStopwatch() {
  clearInterval(stopwatchInterval);
}

// Función para reiniciar el cronómetro
function clearStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = { minutes: 0, seconds: 0, milliseconds: 0 };
  updateStopwatchDisplay();
  document.getElementById('toggleStopwatch').textContent = 'Iniciar';
}

// Función de la cuenta regresiva
function startCountdown() {
  countdownInterval = setInterval(() => {
    if (countdownTime.seconds === 0 && countdownTime.minutes === 0) {
      clearInterval(countdownInterval);
      countdownRunning = false;
      document.getElementById('toggleCountdown').textContent = 'Iniciar';
      return;
    }

    if (countdownTime.seconds === 0) {
      countdownTime.minutes--;
      countdownTime.seconds = 59;
    } else {
      countdownTime.seconds--;
    }

    updateCountdownDisplay();
  }, 1000);
}

// Función para pausar la cuenta regresiva
function pauseCountdown() {
  clearInterval(countdownInterval);
}

// Función para reiniciar la cuenta regresiva
function restartCountdown() {
  clearInterval(countdownInterval);
  const minutesInput = parseInt(document.getElementById('minutesInput').value) || 0;
  const secondsInput = parseInt(document.getElementById('secondsInput').value) || 0;

  countdownTime.minutes = minutesInput;
  countdownTime.seconds = secondsInput;

  updateCountdownDisplay();
  document.getElementById('toggleCountdown').textContent = 'Iniciar';
  countdownRunning = false;
}

// Función para alternar entre iniciar y pausar el cronómetro
function toggleStopwatch() {
  if (stopwatchRunning) {
    pauseStopwatch();
    this.textContent = 'Iniciar';
  } else {
    startStopwatch();
    this.textContent = 'Pausar';
  }
  stopwatchRunning = !stopwatchRunning;
}

// Función para alternar entre iniciar y pausar la cuenta regresiva
function toggleCountdown() {
  const minutesInput = parseInt(document.getElementById('minutesInput').value);
  const secondsInput = parseInt(document.getElementById('secondsInput').value);

  if (!countdownRunning && (isNaN(minutesInput) || isNaN(secondsInput) || (minutesInput === 0 && secondsInput === 0))) {
    alert("Introduce los valores necesarios");
    return;
  }

  if (countdownRunning) {
    pauseCountdown();
    this.textContent = 'Iniciar';
  } else {
    if (!countdownRunning) {
      countdownTime.minutes = minutesInput || 0;
      countdownTime.seconds = secondsInput || 0;
      updateCountdownDisplay();
    }
    startCountdown();
    this.textContent = 'Pausar';
  }
  countdownRunning = !countdownRunning;
}

// Eventos para los botones del cronómetro
document.getElementById('toggleStopwatch').addEventListener('click', toggleStopwatch);
document.getElementById('clearButton').addEventListener('click', clearStopwatch);

// Eventos para los botones de la cuenta regresiva
document.getElementById('toggleCountdown').addEventListener('click', toggleCountdown);
document.getElementById('restartCountdown').addEventListener('click', restartCountdown);
