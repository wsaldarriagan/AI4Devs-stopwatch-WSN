let timerInterval;
let currentSession = "work"; // "work" o "rest"
let remainingRepeats;
let totalTime; // Total time in seconds
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const clearButton = document.getElementById("clearButton");
const alertSound = document.getElementById("alertSound");

function updateTimer() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const hours = Math.floor(minutes / 60);
    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (totalTime > 0) {
        totalTime--;
    } else {
        clearInterval(timerInterval);
        alertSound.play();
        timerDisplay.classList.add("shake"); // Añadir animación
        setTimeout(() => {
            timerDisplay.classList.remove("shake");
        }, 500);
        switchSession();
    }
}

function switchSession() {
    if (currentSession === "work") {
        currentSession = "rest";
        totalTime = getTotalSeconds('restInput'); // Obtener tiempo de descanso
    } else {
        currentSession = "work";
        remainingRepeats--;
        if (remainingRepeats <= 0) {
            alert("Rutina completada!");
            return;
        }
        totalTime = getTotalSeconds('timeInput'); // Obtener tiempo de trabajo
    }
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function getTotalSeconds(inputId) {
    const input = document.getElementById(inputId).value || "00:00:00";
    const parts = input.split(":").map(part => parseInt(part, 10) || 0);
    const hours = parts.length === 3 ? parts[0] : 0; // Si hay horas
    const minutes = parts.length === 3 ? parts[1] : parts[0]; // Minutos
    const seconds = parts.length === 3 ? parts[2] : parts[1]; // Segundos
    return (hours * 3600) + (minutes * 60) + seconds; // Convertir a segundos
}

startButton.addEventListener("click", () => {
    if (!timerInterval) {
        remainingRepeats = document.getElementById("repeats").value;
        totalTime = getTotalSeconds('timeInput'); // Comenzar con el intervalo de trabajo
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }
});

clearButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timerDisplay.textContent = "00:00:00";
    timerDisplay.classList.remove("shake");
});
