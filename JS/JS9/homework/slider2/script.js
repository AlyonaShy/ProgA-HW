document.body.style.backgroundColor = "#999"

let previous = document.getElementById("previous");
let next = document.getElementById("next");

let img = document.querySelectorAll("img");

let n = img.length;

console.log(img);


for (i = 1; i < img.length; i++) {
    img[i].style.opacity = "0"
}

next.onclick = () => {
    for (i = 0; i < n; i++) {
        if (img[i].style.opacity != "0") {
            img[i].style.animation = "rightgo 1s"
            img[i].style.opacity = "0";
            if (i == n - 1) {
                img[0].style.opacity = "1";
                img[0].style.animation = "right 1s"

            } else {
                img[i + 1].style.opacity = "1";
                img[i + 1].style.animation = "right 1s"

            }

            break;
        }
    }
}

previous.onclick = () => {
    for (i = 0; i < n; i++) {
        if (img[i].style.opacity != "0") {
            img[i].style.animation = "leftgo 1s"
            img[i].style.opacity = "0";
            if (i == 0) {
                img[n - 1].style.opacity = "1";
                img[n - 1].style.animation = "left 1s"

            } else {
                img[i - 1].style.opacity = "1";
                img[i - 1].style.animation = "left 1s"

            }

            break;
        }
    }
}
