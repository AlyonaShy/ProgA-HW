document.body.style.backgroundColor = "#e4e0e0";

/* вводні дані таблиці*/
let height = 8, bombNumber = 3;
console.log(height);

let container = document.getElementById("container");
let table = document.createElement("table");

/*функція ствооення таблиці і її визов */
criateTable = () => {


    console.log(table);

    container.appendChild(table);

    for (i = 0; i < height; i++) {
        let row = document.createElement("tr");
        table.appendChild(row);
        for (j = 0; j < height; j++) {
            let column = document.createElement("td");
            row.appendChild(column);
        }
    }

}

criateTable();

/*    */
let myBomb = `<img src="./img/bomb.png" alt="mine">`;
let myFlag = `<img src="./img/flag.png" alt="flag">`;
let checker = false;
let num;
let empty;


/* */

let row = document.getElementsByTagName("tr");

//console.log(row[2].children[3]);


for (i = 0; i < bombNumber; i++) {
    let a = Math.floor(Math.random() * row.length);
    let b = Math.floor(Math.random() * row.length);

    row[a].children[b].bomb = true;
    console.log(row[a].children[b]);


    /*funcsion */
    let check = (x, y) => {
        if (row[x].children[y].num > 0) {
            row[x].children[y].num++;
        } else {
            row[x].children[y].num = 1;
        }
    }



    if (a != 0 & a != row.length & b != 0 & b != row.length) {
        check(a + 1, b);
        check(a - 1, b);
        check(a + 1, b + 1);
        check(a + 1, b - 1);
        check(a - 1, b + 1);
        check(a - 1, b - 1);
        check(a, b + 1);
        check(a, b - 1);
    } else if (a == 0 & b != 0 & b != row.length) {
        check(a + 1, b);
        check(a + 1, b + 1);
        check(a + 1, b - 1);
        check(a, b + 1);
        check(a, b - 1);
    } else if (a == row.length & b != 0 & b != row.length) {
        check(a - 1, b);
        check(a - 1, b + 1);
        check(a - 1, b - 1);
        check(a, b + 1);
        check(a, b - 1);
    } else if (b == 0 & a != 0 & a != row.length) {
        check(a + 1, b);
        check(a - 1, b);
        check(a + 1, b + 1);
        check(a - 1, b + 1);
        check(a, b + 1);
    } else if (b == row.length & a != 0 & a != row.length) {
        check(a + 1, b);
        check(a - 1, b);
        check(a + 1, b - 1);
        check(a - 1, b - 1);
        check(a, b - 1);
    } else if (a == 0 & b == 0) {
        check(a + 1, b);
        check(a + 1, b + 1);
        check(a, b + 1);
    } else if (a == 0 & b == row.length) {
        check(a + 1, b);
        check(a + 1, b - 1);
        check(a, b - 1);
    } else if (a == row.length & b == 0) {
        check(a - 1, b);
        check(a - 1, b + 1);
        check(a, b + 1);
    } else if (a == row.length & b == row.length) {
        check(a - 1, b);
        check(a - 1, b - 1);
        check(a, b - 1);
    }



    /* 

    if (a != 0 & a != row.length & b != 0 & b != row.length) {
        row[a + 1].children[b].num = 1;
        row[a - 1].children[b].num = 1;
        row[a + 1].children[b + 1].num = 1;
        row[a + 1].children[b - 1].num = 1;
        row[a - 1].children[b + 1].num = 1;
        row[a - 1].children[b - 1].num = 1;
        row[a].children[b + 1].num = 1;
        row[a].children[b - 1].num = 1;
    } else if (a = 0 & b != 0 & b != row.length) {
        row[a + 1].children[b].num = 1;
        row[a + 1].children[b + 1].num = 1;
        row[a + 1].children[b - 1].num = 1;
        row[a].children[b + 1].num = 1;
        row[a].children[b - 1].num = 1;
    } else if (a = row.length & b != 0 & b != row.length) {
        row[a - 1].children[b].num = 1;
        row[a - 1].children[b + 1].num = 1;
        row[a - 1].children[b - 1].num = 1;
        row[a].children[b + 1].num = 1;
        row[a].children[b - 1].num = 1;
    } else if (b = 0 & a != 0 & a != row.length) {
        row[a + 1].children[b].num = 1;
        row[a - 1].children[b].num = 1;
        row[a + 1].children[b + 1].num = 1;
        row[a - 1].children[b + 1].num = 1;
        row[a].children[b + 1].num = 1;
    } else if (b = row.length & a != 0 & a != row.length) {
        row[a + 1].children[b].num = 1;
        row[a - 1].children[b].num = 1;
        row[a + 1].children[b - 1].num = 1;
        row[a - 1].children[b - 1].num = 1;
        row[a].children[b - 1].num = 1;
    } else if (a == 0 & b == 0) {
        row[a + 1].children[b].num = 1;
        row[a + 1].children[b + 1].num = 1;
        row[a].children[b + 1].num = 1;
    } else if (a == 0 & b == row.length) {
        row[a + 1].children[b].num = 1;
        row[a + 1].children[b - 1].num = 1;
        row[a].children[b - 1].num = 1;
    } else if (a == row.length & b == 0) {
        row[a - 1].children[b].num = 1;
        row[a - 1].children[b + 1].num = 1;
        row[a].children[b + 1].num = 1;
    } else if (a == row.length & b == row.length) {
        row[a - 1].children[b].num = 1;
        row[a - 1].children[b - 1].num = 1;
        row[a].children[b - 1].num = 1;
    }
    */
}


for (i = 0; i < height; i++) {
    for (j = 0; j < height; j++) {
        if (!row[i].children[j].bomb & !row[i].children[j].num) {
            row[i].children[j].empty = true;
        }
    }
}





for (i = 0; i < height; i++) {
    for (j = 0; j < height; j++) {
        
        row[i].children[j].addEventListener("mouseenter",
            function mouseUp() {
                if (this.checker) {
                    console.log("clicnut");

                } else {
                    this.style.backgroundColor = "yellow";
                }

            },
            false);
        row[i].children[j].addEventListener("mouseleave",
            function mousdown() {
                if (this.checker == true) {
                    console.log("clicnut");
                } else if (this.style.backgroundColor == "#991") {
                    this.style.backgroundColor = "#991";
                } else {
                    this.style.backgroundColor = "#999";
                }
            },
            false);


        row[i].children[j].addEventListener("click",
            function () {
                this.checker = true;
                if (this.bomb) {
                    this.innerHTML = myBomb;
                    //alert("Гра закінчена, Ви програли");
                } else if (this.num) {
                    this.innerHTML = this.num;

                } else if (this.empty) {
                    this.style.backgroundColor = "#995";
                    console.log("clock" + i);
                    emptyCheck(i, j);
                    //
                    // this.removeEventListener(mousdown());
                }
            },
            false);

    }



}






let emptyCheck =(q, w) => {
    for(k = 0; k < height; k++) {
        for (p = 0; p < height; p++) {
            console.log(row[k].children[p]);
            if (row[k].children[p].empty == true) {
                row[k].children[p].style.backgroundColor = "#991";
            } else if (row[k].children[p].num == true) {
                row[k].children[p].innerHTML = row[k].children[p].num;
            }
        }
    };
}




/*
const td = document.getElementsByTagName("td");

//console.log(td);

//let bomb = document.getElementById("bomb");
//console.log(bomb);
//td.mouseenter
let myBomb = `<img src="./img/bomb.png" alt="mine">`;
let myFlag = `<img src="./img/flag.png" alt="flag">`;

let checker = false;
let massBomb = [];
let num;
let empty;

/*
td[1].bomb = true;
td[5].bomb = true;
td[0].num = 1;
td[2].num = 1;
td[12].num = 1;
td[9].empty = true;


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
*/









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
  
  


        щось...
  let cell = document.getElementsByTagName("td");
cell.addEventListener("click",
function () {
    if (this.bomb) {
        this.innerHTML = myBomb;
        //alert("Гра закінчена, Ви програли");
    } else if (this.num) {
        this.innerHTML = this.num;

    } else if (this.empty) {
        this.style.backgroundColor = "#995";
        console.log("clock" + this);
        //emptyCheck(i, j);
        //
        // this.removeEventListener(mousdown());
    }
},
false)
  */