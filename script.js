
let timer;
let seconds = 3600;
let running = false;
let laps = [];

function updateDisplay() {
    const display = document.getElementById('clockDisplay');
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    display.innerText = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startClock() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateDisplay();
            } else {
                stopClock();
            }
        }, 1000);
    }
}

function stopClock() {
    running = false;
    clearInterval(timer);
}

function resetClock() {
    stopClock();
    seconds = 3600;
    updateDisplay();
    laps = [];
    document.getElementById('lapList').innerHTML = '';
}

function lapTime() {
    if (running) {
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        const lap = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        laps.push(lap);
        renderLaps();
    }
}

function renderLaps() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
    laps.forEach((lap, index) => {
        lapList.innerHTML += `<p><span>Lap ${index + 1}</span><span>${lap}</span></p>`;
    });
}

function ringBell() {
    alert("Bell rang!");
}

updateDisplay();
