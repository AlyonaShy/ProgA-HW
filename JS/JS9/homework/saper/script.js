document.body.style.backgroundColor = "#e4e0e0";

/* вводні дані таблиці*/
let height = 8, bombNumber = 5;
console.log(height);

let container = document.getElementById("container");
let table = document.createElement("table");

/*функція ствооення таблиці і її виклик */
criateTable = () => {


    //console.log(table);

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
/* викликаєм ф-ю створення табл */
criateTable();

/*  задаєм змінні   */
let myBomb = `<img src="./img/bomb.png" alt="mine">`; // зобр. бомби
let myFlag = `<img src="./img/flag.png" alt="flag">`; //зобр. прапорця
let checker = false; // мітка для перевірки чи був клік по клітинці
let num; // для задавання допоміжних цифр на клітинці, що торкається бомби
let empty; // мітка для клітинок які порожні
let open; 


/* здаем змінну для отримання строки в якій дочерні елементи будуть клітинки */

let row = document.getElementsByTagName("tr");


/* рандомно задаем міну для клитинки, далі для кожної роставляєм по діаметру допоміжні цифри */
for (i = 0; i < bombNumber; i++) {
    let a = Math.floor(Math.random() * row.length);
    let b = Math.floor(Math.random() * row.length);

    if (row[a].children[b].bomb == true) {
        console.log(i);
        i = i - 1; //якщо клітинка вже з міною вертаю ітерацію на повтор
        continue;
    } else {
        row[a].children[b].bomb = true;
        row[a].children[b].num = false; // удаляю допоміжні цифри, якщо міна припадає на клітинку з цифрою
        console.log(row[a].children[b]);
    }

    /*функція для підрахунку допоміжної цифри навколо міни */
    let check = (x, y) => {
        if (!row[x].children[y].bomb) {
            if (row[x].children[y].num > 0) {
                row[x].children[y].num++;
            } else {
                row[x].children[y].num = 1;
            }
        } 
    }


/* вибираю всі клітинки навколо міни, в залежності від її розташування в сітці таблиці, для кожної запускається функція прорахунку допоміжної цифри */
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

}

/* зазначаю всі незадіяні клитинки позначкою порожньої клітинки */
for (i = 0; i < height; i++) {
    for (j = 0; j < height; j++) {
        if (!row[i].children[j].bomb & !row[i].children[j].num) {
            row[i].children[j].empty = true;
        }
    }

}



/* перебор клитинок, щоб повісити на кожну "событие" */
for (i = 0; i < height; i++) {
    for (j = 0; j < height; j++) {

        row[i].children[j].addEventListener("mouseenter", //для руху курсора по клітинках
            function mouseUp() {
                if (this.checker || this.open) {
                    console.log("clicnut");

                } else {
                    this.style.backgroundColor = "yellow";
                }

            },
            false);
        row[i].children[j].addEventListener("mouseleave",// для виходу з клітинки
            function mousdown() {
                if (!this.checker & !this.open) {
                    this.style.backgroundColor = "#a5a2a2";
                }
                
            },
            false);


        row[i].children[j].addEventListener("click", // для кліку
            function () {
                this.checker = true;
                if (this.bomb) {
                    this.innerHTML = myBomb;
                    //alert("Гра закінчена, Ви програли");
                } else if (this.num) {
                    this.innerHTML = this.num;

                } else if (this.empty) {
                    this.style.backgroundColor = "#995";
                    console.log("clock" + this);
                    emptyCheck(i, j);
                }
            },
            false);

    }



}



/* ф-я має відкривати всі пусті клітинки навколо тої що був клік. Але моя відкриває всі порожні, я не можу прив'язатись до клітинки по якій був клік бо перебором перебираються всі клітинки до останньої */

    let emptyCheck = (q, w) => {
        for (k = 0; k < height; k++) {
            for (p = 0; p < height; p++) {
                //console.log(row[k].children[p]);
                if (row[k].children[p].empty == true) {
                    row[k].children[p].style.backgroundColor = "#991";
                    row[k].children[p].open = true
                } else if (row[k].children[p].num == true) {
                    row[k].children[p].innerHTML = row[k].children[p].num;
                }
            }
        };
    }



