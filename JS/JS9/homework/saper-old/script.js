document.body.style.backgroundColor = "#e4e0e0";

const td = document.getElementsByTagName("td");

console.log(td);

let bomb = document.getElementById("bomb");
console.log(bomb);
//td.mouseenter

for (i = 0; i <= td.length; i++) {
    console.log(td[i]);
    td[i].addEventListener("mouseenter",
        function () {
            this.style.backgroundColor = "yellow";
            //alert("Обработчик DIV 2");
        },
        false);
    td[i].addEventListener("mouseleave",
        function () {
            this.style.backgroundColor = "green";
            },
        false);
        
    td[i].addEventListener("click",
        function () {
            if(bomb) {
                this.style.backgroundColor = "red";
            } else {
                this.style.backgroundColor = "green";
            }
            
        },
        false);
}

//td.forEach(o => console.log(o));

/*td.forEach(function(item, i, arr) {
    console.log(i + ": " + item + " (массив:" + arr + ")")
    //alert( i + ": " + item + " (массив:" + arr + ")" );
  });*/