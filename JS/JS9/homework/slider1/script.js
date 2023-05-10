document.body.style.backgroundColor = "#999"

let previous = document.getElementById("previous");
let next = document.getElementById("next");
let x = 0;
next.onclick = () => {
    x+= 600;
    if (x >= 3000) {
        x = 0;
    }
    let img = document.querySelectorAll("img");
    img.forEach((elem) => {
        
        elem.style.right = `${x}px`;
    });
}

previous.onclick = () => {
    x-= 600;
    if (x <= 0) {
        x = 2400;
    }
    let img = document.querySelectorAll("img");
    img.forEach((elem) => {
        
        elem.style.right = `${x}px`;
    });
}

/*let arr = ['a', 'b', 'c', 'd', 'e'];

arr.forEach(function(elem, index) {
	document.write(index + '. ' + elem + '<br>');
});*/