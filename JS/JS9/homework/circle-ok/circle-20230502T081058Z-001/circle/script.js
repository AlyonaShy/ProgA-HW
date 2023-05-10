
document.body.style.backgroundColor = "#888";

let btn = document.querySelector("#btn");
let size;
let all;
let colorMass = ["red", "blue", "black", "yellow", "orange", "white", "green", "pink", "violet"];

let circleCriate = () => {
    
    let container = document.getElementById("container");

    for (i = 0; i < 100; i++) {
        let circle = document.createElement("div");

        container.appendChild(circle);

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.margin = `10px`;
        circle.style.borderRadius = `50%`;
        circle.style.backgroundColor = `${colorMass[Math.floor(Math.random() * colorMass.length)]}`;
        
    }
}




btn.addEventListener("click",
    () => {
        size = Number(prompt("size"));
        btn.style.visibility = "hidden";
        circleCriate();
        deliteCircle();
    },
    false
);



let deliteCircle = () => {
    all = document.querySelectorAll("div > div");

    for (let elem of all) {

        elem.addEventListener("mouseover",
            () => {
                for (let e of all) {
                    e.addEventListener("click",
                    () => {
                        e.remove();
                    },
                    false)
                    
                }
            },
            false)

    }
}

