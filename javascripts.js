let seconds = 0, minutes = 0, hours = 0;
let timer;
let running = false;
let speed = 15;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            updateDisplay();
        }, speed);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    let display = document.getElementById("display");
    display.innerText = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

function changeColor(newColor) {
    document.getElementById("display").style.color = newColor;
}
