let min = document.querySelector("#min"),
    sec = document.querySelector("#sec"),
    mSec = document.querySelector("#msec"),
    start = document.querySelector("#start"),
    stopButton = document.querySelector("#stop"),
    reset = document.querySelector("#reset"),
    counter = 0,
    intervalHandler;

min.innerHTML = 0;
sec.innerHTML = 0;
mSec.innerHTML = 0;


let count = () => {
    counter++;
    if (counter < 10) {
        mSec.innerHTML = counter;
    } else {
        counter = 0;
        mSec.innerHTML = counter;
        sec.innerHTML++;
        if (sec.innerHTML > 59) {
            sec.innerHTML = 0;
            min.innerHTML++;
        }
    }

}
start.onclick = () => {
    intervalHandler = setInterval(count, 100);
};
stopButton.onclick = () => {
    clearInterval(intervalHandler);
};
reset.onclick = () => {
    clearInterval(intervalHandler);
    min.innerHTML = 0;
    sec.innerHTML = 0;
    mSec.innerHTML = 0;
}
