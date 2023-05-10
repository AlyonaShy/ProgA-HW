const td = document.getElementsByTagName("td");

//console.log(td);

//let bomb = document.getElementById("bomb");
//console.log(bomb);
//td.mouseenter
let myBomb = `<img src="./img/bomb.png" alt="mine">`;
let myFlag = `<img src="./img/flag.png" alt="flag">`;

let checker = false;
let massBomb = [];
let num = 1;
let empty;

/*
td[1].bomb = true;
td[5].bomb = true;
td[0].num = 1;
td[2].num = 1;
td[12].num = 1;
td[9].empty = true;
*/

for (i = 0; i < 3; i++) {
    massBomb[i] = Math.floor(Math.random() * td.length);
    td[massBomb[i]].bomb = true;
}
console.log(massBomb);


for (i = 0; i < td.length; i++) {
    if (td[i].bomb) {
        td[i + 1].num = 1;
        td[i - 1].num = 1;
        td[i + 10].num = 1;
        td[i + 9].num = 1;
        td[i + 11].num = 1;
        td[i - 10].num = 1;
        td[i - 9].num = 1;
        td[i - 11].num = 1;
    }
}
for (i = 0; i < td.length; i++) {
    if (td[i].bomb || td[i].num) {
        console.log("ffff");
    } else {
        td[i].empty = true;
    }
}


//console.log(td[1].bomb);

for (i = 0; i <= td.length; i++) {
    //console.log(td[1].bomb);

    td[i].addEventListener("mouseenter",
        function mouseUp() {
            if (this.checker) {
                console.log("clicnut");

            } else {
                this.style.backgroundColor = "yellow";
            }

        },
        false);
    td[i].addEventListener("mouseleave",
        function mousdown() {
            if (this.checker == true) {
                console.log("clicnut");
            } else {
                this.style.backgroundColor = "#999";
            }
        },
        false);


    td[i].addEventListener("click",
        function () {
            this.checker = true;
            if (this.bomb) {
                this.innerHTML = myBomb;
                //alert("Гра закінчена, Ви програли");
            } else if (this.num) {
                this.innerHTML = this.num;

            } else if (this.empty) {
                this.style.backgroundColor = "#991";
                // this.removeEventListener(mousdown());
            }
        },
        false);

}










//td.forEach(o => console.log(o));

/*td.forEach(function(item, i, arr) {
    console.log(i + ": " + item + " (массив:" + arr + ")")
    //alert( i + ": " + item + " (массив:" + arr + ")" );
  });
  
  
  
  td[i].addEventListener("click",
        function () {
            if(bomb) {
                this.style.backgroundColor = "red";
            } else {
                this.style.backgroundColor = "green";
            }
            
        },
        false);
  
  
  
  */