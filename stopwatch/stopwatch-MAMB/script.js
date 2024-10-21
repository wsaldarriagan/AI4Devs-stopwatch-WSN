let stopwatchInterval;
let stopwatchTime = 0; // en segundos
let countdownInterval;
let countdownTime = 0; // en segundos
let isCountingDown = false;

// Funciones del cronómetro
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
            const seconds = String(stopwatchTime % 60).padStart(2, '0');
            document.getElementById("stopwatch-display").textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
        document.getElementById("start-stopwatch").classList.add("hidden");
        document.getElementById("pause-stopwatch").classList.remove("hidden");
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    document.getElementById("pause-stopwatch").classList.add("hidden");
    document.getElementById("start-stopwatch").classList.remove("hidden");
}

function resetStopwatch() {
    pauseStopwatch();
    stopwatchTime = 0;
    document.getElementById("stopwatch-display").textContent = "00:00:00";
}

// Funciones de la cuenta atrás
function startCountdown() {
    if (countdownTime <= 0) return;

    isCountingDown = true;
    document.querySelectorAll(".number-btn").forEach(btn => btn.classList.add("hidden"));
    document.getElementById("set-countdown").classList.add("hidden");
    document.getElementById("pause-countdown").classList.remove("hidden");
    document.getElementById("stop-countdown").classList.remove("hidden");
    document.getElementById("countdown-display").textContent = formatTime(countdownTime);
    
    countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            document.getElementById("countdown-display").textContent = formatTime(countdownTime);
        } else {
            clearInterval(countdownInterval);
            isCountingDown = false;
            playSound();
            document.getElementById("countdown-display").textContent = "00:00";
            resetCountdown();
        }
    }, 1000); // Ejecutar cada segundo
}

function pauseCountdown() {
    clearInterval(countdownInterval);
    isCountingDown = false;
    document.getElementById("pause-countdown").classList.add("hidden");
    document.getElementById("set-countdown").classList.remove("hidden");
}

function stopCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    isCountingDown = false;
    resetCountdown();
}

// Formatear tiempo para la cuenta atrás
function formatTime(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0'); // Convertir a minutos
    const secs = String(seconds % 60).padStart(2, '0'); // Resto para segundos
    return `${mins}:${secs}`;
}

// Función para reproducir sonido
let soundPlayed = false; // Flag para controlar la reproducción del sonido

function playSound() {
    if (!soundPlayed) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // Tipo de onda
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Frecuencia en Hz
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1); // Sonido de 1 segundo
        soundPlayed = true; // Asegurarse de que el sonido solo se reproduzca una vez
    }
}

// Reiniciar la cuenta atrás
function resetCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 0;
    document.getElementById("countdown-display").textContent = "00:00";
    document.querySelectorAll(".number-btn").forEach(btn => btn.classList.remove("hidden"));
    document.getElementById("set-countdown").classList.remove("hidden");
    document.getElementById("pause-countdown").classList.add("hidden");
    document.getElementById("stop-countdown").classList.add("hidden");
    soundPlayed = false; // Restablecer el flag
}

// Manejo de botones numéricos
document.querySelectorAll(".number-btn").forEach(button => {
    button.onclick = function () {
        if (!isCountingDown) {
            const value = this.getAttribute('data-value');
            countdownTime = (countdownTime * 10) + parseInt(value) * 60; // Convertir a segundos
            document.getElementById("countdown-display").textContent = formatTime(countdownTime);
        }
    };
});

// Cambiar entre el cronómetro y la cuenta atrás
document.getElementById("stopwatch-btn").onclick = function() {
    document.getElementById("stopwatch").classList.remove("hidden");
    document.getElementById("countdown").classList.add("hidden");
    resetCountdown(); // Resetear cuenta atrás al cambiar
};

document.getElementById("countdown-btn").onclick = function() {
    document.getElementById("countdown").classList.remove("hidden");
    document.getElementById("stopwatch").classList.add("hidden");
    resetStopwatch(); // Resetear cronómetro al cambiar
};

// Manejo de botones del cronómetro
document.getElementById("start-stopwatch").onclick = startStopwatch;
document.getElementById("pause-stopwatch").onclick = pauseStopwatch;
document.getElementById("reset-stopwatch").onclick = resetStopwatch;

// Manejo de botones de la cuenta atrás
document.getElementById("set-countdown").onclick = startCountdown;
document.getElementById("stop-countdown").onclick = stopCountdown;
document.getElementById("pause-countdown").onclick = pauseCountdown;
