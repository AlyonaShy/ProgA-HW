let firstBtn = document.querySelector("#first"),
    secondBtn = document.querySelector("#second"),
    thirdBtn = document.querySelector("#third"),
    fourthBtn = document.querySelector("#fourth"),
    fifthBtn = document.querySelector("#fifth"),
    sixthBtn = document.querySelector("#sixth");


firstBtn.addEventListener("click", () => {
    console.log(userOne);
})

secondBtn.addEventListener("click", () => {
    userOne.user();
})

thirdBtn.addEventListener("click", () => {
    userOne.user.bind(userTwo)();
})

fourthBtn.addEventListener("click", () => {
    let val = prompt("Множник:");
    let mass = [2, 3, 6];
    console.log(mass.mult(val));
})
fifthBtn.addEventListener("click", () => {
    count();

})

sixthBtn.addEventListener("click", () => {
  
    for(i = 0; i <= 1000; i++) {
        let randomNum = Math.floor(Math.random() * 101);
        myFuncMassRandom(randomNum);
    }
  console.log(mmaass);

})

//2 завдання
let userOne = {
    name: "Ivan",
    lastName: "Ivanov",
    age: "24",
    user: function () {
        console.log(`Привіт! Я ${this.name + " " + this.lastName}.`);
    }
}

//3 завдання
let userTwo = {
    name: "Vova",
    lastName: "Vovk",
    age: "20"
}

//4 завдання
Array.prototype.mult = function (x) {
    return this.map(function (y) {
        return y * x;
    })
}


//5  завдання
let numFunc = 0;
console.log(numFunc);

function count() {
    numFunc++;
    console.log(numFunc);
}


//6  завдання
let mmaass = [];
console.log(mmaass);
function massrandom(myMassiv) {
    return function(x) {
        if (myMassiv.length == 100) {
         return;
        }
        let z = false;
        for(i = 0; i <= myMassiv.length; i++) {
            if(x == myMassiv[i]) {
                z = true;
            }
        }
        if (z == false) {
            myMassiv.push(x);
        }
        
    }
}
  let myFuncMassRandom = massrandom(mmaass);
