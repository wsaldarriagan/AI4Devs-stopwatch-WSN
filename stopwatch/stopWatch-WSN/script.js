let cronometroInterval, cuentaRegresivaInterval;
let isCronometroRunning = false, isCuentaRegresivaRunning = false;

// Función para iniciar con cronómetro por defecto
window.onload = function() {
    document.getElementById('cronometro').style.display = 'block';
    document.getElementById('cuenta-regresiva').style.display = 'none';
    document.getElementById('cronometro-btn').classList.add('active');
    document.getElementById('cuenta-regresiva-btn').classList.add('inactive');
};

// Intercambio entre cronómetro y cuenta regresiva
document.getElementById('cronometro-btn').addEventListener('click', function() {
    resetAll();
    document.getElementById('cronometro').style.display = 'block';
    document.getElementById('cuenta-regresiva').style.display = 'none';
    toggleActiveButton('cronometro-btn', 'cuenta-regresiva-btn');
});

document.getElementById('cuenta-regresiva-btn').addEventListener('click', function() {
    resetAll();
    document.getElementById('cronometro').style.display = 'none';
    document.getElementById('cuenta-regresiva').style.display = 'block';
    // Restablecer los campos de minutos y segundos a cero al cambiar a cuenta regresiva
    document.getElementById('minutos-input').value = 0;
    document.getElementById('segundos-input').value = 0;
    toggleActiveButton('cuenta-regresiva-btn', 'cronometro-btn');
});

// Función para cambiar los colores de los botones activos e inactivos
function toggleActiveButton(activeId, inactiveId) {
    document.getElementById(activeId).classList.add('active');
    document.getElementById(activeId).classList.remove('inactive');
    document.getElementById(inactiveId).classList.add('inactive');
    document.getElementById(inactiveId).classList.remove('active');
}

// Asignar automáticamente 0 al campo vacío
document.getElementById('minutos-input').addEventListener('input', function() {
    if (document.getElementById('segundos-input').value === '') {
        document.getElementById('segundos-input').value = 0;
    }
});

document.getElementById('segundos-input').addEventListener('input', function() {
    if (document.getElementById('minutos-input').value === '') {
        document.getElementById('minutos-input').value = 0;
    }
});

// Cronómetro funcionalidad
let cronometroTime = 0;
document.getElementById('cronometro-start-pause').addEventListener('click', function() {
    if (isCronometroRunning) {
        clearInterval(cronometroInterval);
        this.textContent = 'Iniciar';
    } else {
        this.textContent = 'Pausar';
        cronometroInterval = setInterval(function() {
            cronometroTime += 10;
            document.getElementById('cronometro-display').textContent = formatTime(cronometroTime);
        }, 10);
    }
    isCronometroRunning = !isCronometroRunning;
});

document.getElementById('cronometro-reset').addEventListener('click', function() {
    resetCronometro();
});

// Funcionalidad para el cronómetro
function resetCronometro() {
    clearInterval(cronometroInterval);
    cronometroTime = 0;
    isCronometroRunning = false;
    document.getElementById('cronometro-display').textContent = '00:00:00';
    document.getElementById('cronometro-start-pause').textContent = 'Iniciar';
}

function formatTime(ms) {
    let minutes = Math.floor(ms / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

// Cuenta regresiva funcionalidad
document.getElementById('cuenta-regresiva-start-pause').addEventListener('click', function() {
    let minutos = parseInt(document.getElementById('minutos-input').value) || 0;
    let segundos = parseInt(document.getElementById('segundos-input').value) || 0;
    let totalSegundos = minutos * 60 + segundos;
    
    if (totalSegundos === 0) {
        alert("Introduce los valores necesarios");
        return;
    }
    
    if (isCuentaRegresivaRunning) {
        clearInterval(cuentaRegresivaInterval);
        this.textContent = 'Iniciar';
    } else {
        this.textContent = 'Pausar';
        cuentaRegresivaInterval = setInterval(function() {
            if (totalSegundos <= 0) {
                clearInterval(cuentaRegresivaInterval);
                document.getElementById('cuenta-regresiva-start-pause').textContent = 'Iniciar';
            } else {
                totalSegundos--;
                document.getElementById('cuenta-regresiva-display').textContent = formatCountdown(totalSegundos);
            }
        }, 1000);
    }
    isCuentaRegresivaRunning = !isCuentaRegresivaRunning;
});

document.getElementById('cuenta-regresiva-reset').addEventListener('click', function() {
    resetCuentaRegresiva();
    // Restablecer los campos de minutos y segundos a cero al reiniciar
    document.getElementById('minutos-input').value = 0;
    document.getElementById('segundos-input').value = 0;
});

// Funcionalidad para la cuenta regresiva
function resetCuentaRegresiva() {
    clearInterval(cuentaRegresivaInterval);
    document.getElementById('minutos-input').value = 0;
    document.getElementById('segundos-input').value = 0;
    document.getElementById('cuenta-regresiva-display').textContent = '00:00';
    isCuentaRegresivaRunning = false;
    document.getElementById('cuenta-regresiva-start-pause').textContent = 'Iniciar';
}

function formatCountdown(seconds) {
    let minutos = Math.floor(seconds / 60);
    let segundos = seconds % 60;
    return `${pad(minutos)}:${pad(segundos)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

// Reseteo general al cambiar de modo
function resetAll() {
    resetCronometro();
    resetCuentaRegresiva();
}
