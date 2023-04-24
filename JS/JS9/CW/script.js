document.getElementById("body").style.backgroundColor = "rgb(215, 228, 224)";
document.querySelector(".container").style = ("max-width: 800px; margin: 0 auto;");
document.querySelector(".timer").style = ("padding-top: 50px; display: flex; justify-content: center; gap: 15px;");
document.querySelector(".timer__area1").style = ("width: 200px; height: 100px; background-color: rgb(173, 211, 199); border: 1px solid gray; box-shadow: 5px 5px 10px gray; border-radius: 10px; color: rgb(87, 87, 87); font-size: 55px; font-family: monospace; text-align: center; padding-top: 15px; box-sizing: border-box;");
document.querySelector(".timer__area2").style = ("width: 200px; height: 100px; background-color: rgb(173, 211, 199); border: 1px solid gray; box-shadow: 5px 5px 10px gray; border-radius: 10px; color: rgb(87, 87, 87); font-size: 55px; font-family: monospace; text-align: center; padding-top: 15px; box-sizing: border-box;");
document.querySelector(".timer__area3").style = ("width: 200px; height: 100px; background-color: rgb(173, 211, 199); border: 1px solid gray; box-shadow: 5px 5px 10px gray; border-radius: 10px; color: rgb(87, 87, 87); font-size: 55px; font-family: monospace; text-align: center; padding-top: 15px; box-sizing: border-box;");
document.querySelector(".btns").style = ("padding-top: 50px; display: flex; justify-content: center; gap: 15px;");

let input = document.querySelectorAll("input");
for(i = 0; i < input.length; i++) {
    input[i].style = ("width: 100px; height: 40px; background-color: rgb(54, 75, 68); border: none; box-shadow: 5px 5px 10px black; border-radius: 50px; color: #fff; text-transform: uppercase; font-family: monospace;");
};


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
let dis = true;
start.onclick = () => {
    if (dis == true) {
    intervalHandler = setInterval(count, 100);
    dis = false;
    }
};
stopButton.onclick = () => {
    clearInterval(intervalHandler);
    dis = true;
};
reset.onclick = () => {
    clearInterval(intervalHandler);
    min.innerHTML = 0;
    sec.innerHTML = 0;
    mSec.innerHTML = 0;
    dis = true;
}
