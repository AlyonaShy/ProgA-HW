//let size = document.getElementById("pizza");
console.log(pizza);
let mySize;

function changePrise (x) {
 let prise = document.createElement("span");
 let prCont = document.getElementById("pricepizza");
 prCont.appendChild(prise);
 prise.innerHTML = x;
 console.log(prise.innerHTML);
}
changePrise (11);


small.addEventListener("click", () => {
    //let radBut = document.getElementsByName("size");
    //radBut.forEach(element => {
    //if (this.checked) {
            mySize = this.value;
       // }
console.log(mySize);
        
    //});
})
//console.log(radBut);

/*
size.addEventListener("mousedown", () => {

const sizePrise = document.getElementsByClassName("radioIn");

sizePrise.array.forEach(element => { 
    
});


})

size.addEventListener("mousedown", () => {
    
        if (document.getElementById("mid").checked)  {
            changePrise (20);
        }else if (document.getElementById("small").checked) {
            changePrise (10);
        }else if (document.getElementById("big").checked) {
            changePrise (30);
        }






radioButtons.forEach(item => {
                    res += `Первое выражение ${item.value} второе выражение ${item.checked} \r`
             
                });


for(i = 0; i <= data.length; i++) {
    const newdiv = document.createElement("p");
    if (data[i].saleRate != undefined) {
    newdiv.innerHTML = `Курс ${data[i].currency}  до гривні НБУ: ${data[i].saleRateNB} / ${data[i].purchaseRateNB}, ринок: ${data[i].saleRate} / ${data[i].purchaseRate}`
    } else {
        newdiv.innerHTML = `Курс ${data[i].currency}  до гривні НБУ: ${data[i].saleRateNB} / ${data[i].purchaseRateNB}, ринок: дані відсутні`
    }
    myDiv.appendChild(newdiv);   */