let seconds = 0;
let interval;

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('display').innerText = `${hours}:${minutes}:${secs}`;
}

document.getElementById('start').addEventListener('click', () => {
    if (!interval) {
        interval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('clear').addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    updateDisplay();
});
