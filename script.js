let startTime, updatedTime, difference, tInterval, running = false, lapTime = 0;
const display = document.getElementById('display');
const records = document.getElementById('records');

function start() {
    if (!running) {
        startTime = new Date().getTime() - lapTime;
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(tInterval);
        lapTime = difference;
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    lapTime = 0;
    running = false;
    display.innerHTML = "00:00:00:000";
}

function save() {
    const recordDiv = document.createElement('div');
    recordDiv.classList.add('record');
    recordDiv.innerText = display.innerText;
    records.appendChild(recordDiv);
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
