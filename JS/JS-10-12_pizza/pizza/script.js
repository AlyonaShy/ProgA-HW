
let sizePrice,
    priseSum,
    draggable,
    flag,
    item,
    sale = false;

let sauceObj = [];
const addsum = arr => arr.reduce(function(p,c){return Number(p)+Number(c.prise)},'');


//price at size
document.querySelector("#small").value = 50;
document.querySelector("#mid").value = 75;
document.querySelector("#big").value = 100;
//price at sauce
sauceClassic.value = 20;
sauceBBQ.value = 25;
sauceRikotta.value = 30;
//price at topping
moc1.value = 15;
moc2.value = 16;
moc3.value = 17;
telya.value = 27;
vetch1.value = 19;
vetch2.value = 31;
// name sause
sauceClassic.flag = "Кетчуп";
sauceBBQ.flag = "BBQ";
sauceRikotta.flag = "Рікота";
moc1.flag = "Сир твердий";
moc2.flag = "Сир Фета";
moc3.flag = "Моцарела";
telya.flag = "Телятина";
vetch1.flag = "Помідори";
vetch2.flag = "Гриби";
//помічаєм соуси
let isSause;
sauceClassic.isSause = 1;
sauceBBQ.isSause = 1;
sauceRikotta.isSause = 1;
moc1.isSause = false;
moc2.isSause = false;
moc3.isSause = false;
telya.isSause = false;
vetch1.isSause = false;
vetch2.isSause = false;

//список з соусів
let listSausBox = document.querySelector(".sauces")
let listTopBox = document.querySelector(".topings")
//банер що тікає

function rndm() {
    return Math.floor(Math.random() * 500)
}
let banner = document.querySelector("#banner");

banner.addEventListener("mouseenter", () => {
    banner.style.right = `${rndm()}px`;
    banner.style.top = `${rndm()}px`;

}, false)

noTuch.addEventListener("click", () => {
    alert("Ви зловили знижку");
    sale = true;
    priseSumFnc();
})

//створення ячейок для соусів і топінгів

createListSause = function (name, box, itemId) {
    let listSaus = document.createElement("span");
    box.appendChild(listSaus);
    listSaus.innerHTML = `${name}`;
    listSaus.item = `${itemId}`;

    let delBtn = document.createElement("button");
    listSaus.appendChild(delBtn);
    delBtn.className = "delite";
    delBtn.innerHTML = "X";

}

// перебор всіх соусів і вішання флага щоб відслідковувати перетягування
let souceOll = document.querySelectorAll(".draggable");



//обробка радіобаттона при зміні
let size = document.getElementsByName('size');
for (const radioButton of size) {
    radioButton.addEventListener('change', priceForSize);
}

//функція суми
let priseSumFnc = function () {
    if (sale == true) {
        priseSum = Math.floor((Number(sizePrice) + addsum(sauceObj)) * 0.7);
    } else {
        priseSum = Number(sizePrice) + addsum(sauceObj);
    }
    document.querySelector("#pricepizza").innerHTML = priseSum;

}

function priceForSize() {
    for (var i = 0; i < size.length; i++) {
        if (size[i].checked) {
            sizePrice = size[i].value
        }
    }
    priseSumFnc();
}

priceForSize()


//перетягування
const table = document.querySelector(".table");

table.ondragover = allowDrop; //дозволити перетягувати на об'єкт

function allowDrop(event) {
    event.preventDefault();
}

/* додає картинку соусу поверх коржа */
function addPicture(url, itemId) {
    let newPicture = document.createElement("img");
    table.appendChild(newPicture);
    newPicture.src = `${url}`;
    newPicture.className = `${itemId}`

}
//збір інфо перетягуваного об'єкта

for (let elem of souceOll) {

    elem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("id", event.target.id);
        event.dataTransfer.setData("price", event.target.value);
        event.dataTransfer.setData("name", event.target.flag);
        event.dataTransfer.setData("isSause", event.target.isSause);
        event.dataTransfer.setData("picture", event.target.picture);

    })

}


//прийом інфо перетягуваного об'єкта
table.addEventListener("drop", (event) => {
    let itemId = event.dataTransfer.getData("id");
    let priseSause = Number(event.dataTransfer.getData("price"));
    let name = event.dataTransfer.getData("name");
    let isSause = Number(event.dataTransfer.getData("isSause"));
    let picture = event.dataTransfer.getData("url");

    if (isSause == 1) {
        createListSause(name, listSausBox, itemId);
    } else {
        createListSause(name, listTopBox, itemId);
    }

    sauceObj.push({id : itemId, prise : priseSause})

    addPicture(picture, itemId);

    priseSumFnc();

})



//delite

let delBtns = document.querySelector(".topings");
let delBtns2 = document.querySelector(".sauces");

delBtns.addEventListener('click', createFuncDel, false);
delBtns2.addEventListener('click', createFuncDel, false);


function createFuncDel(e) {
        //видаляє обєкт з масиву обєктів з соусами і перераховуе суму
    for (let i = 0; i < sauceObj.length; i++) {
        if (sauceObj[i].id === e.target.parentElement.item) {
            sauceObj.splice(i, 1);
            break;
        }
      }
    
    priseSumFnc();

    document.querySelector(`.table > .${e.target.parentElement.item}`).remove(); //удаляє картинку з коржа
   

    if(e.target.className == "delite") {
        e.target.parentElement.remove(); //удаляє соус зі списку
    }
    

}



//перевірка форми

let inputName = document.querySelector("#nameform");
let inputPhone = document.querySelector("#phoneform");
let inputEmail = document.querySelector("#emailform");
let allInput = document.querySelectorAll(".allinp");
let isValid = false;
inputName.isValid = false;
inputPhone.isValid = false;
inputEmail.isValid = false;


//console.log(inputName.value);
const regexName = new RegExp(/^[A-ZА-ЯІЇЄ]{1}[a-zа-яіїє]{1,10}/);
const regexPhone = new RegExp(/^\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/);
const regexEmail = new RegExp(/^[a-z]{1,10}\@[a-z]{2,5}\.[a-z]{1,3}/i);


let checkFunc = function (input, regex, i) {
    let check = regex.test(input.value);

    if (check == true) {
        input.style.color = ("blue");
        //console.log("blue");
        document.querySelectorAll(".errorinput")[i].innerHTML = "";
        input.isValid = true;

    } else if (check == false) {
        input.style.color = ("red");
        //console.log("red");
        document.querySelectorAll(".errorinput")[i].innerHTML = "поле заповнено не коректно";
        input.isValid = false;

    }

    //console.log(check);
}


inputName.addEventListener("blur", () => {
    checkFunc(inputName, regexName, 0);

})
inputPhone.addEventListener("blur", () => {
    checkFunc(inputPhone, regexPhone, 1);

})
inputEmail.addEventListener("blur", () => {
    checkFunc(inputEmail, regexEmail, 2);

})
//відправка форми

let submitForm = document.getElementsByTagName("form");
//console.log(submitForm[1]);
submitForm[1].addEventListener("submit", (e) => {
    let n = 0;
    for (let elem of allInput) {
        if (elem.isValid == true) {
            n++;
        }
    }
    if (n == allInput.length) {
        alert("send");
        e.preventDefault();

    } else {
        e.preventDefault();
        alert("not yet");
    }

})


