let noTuch = document.getElementById("btn");

console.log(noTuch);

function rndm () {
   return Math.floor(Math.random() * 500)
}

noTuch.addEventListener("mouseenter", (e) => {
    noTuch.style.right = `${rndm()}px`;
    noTuch.style.top = `${rndm()}px`;

}, false);