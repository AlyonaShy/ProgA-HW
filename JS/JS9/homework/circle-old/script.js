
document.body.style.backgroundColor = "#888";

let btn = document.querySelector("#btn");
let size;
let all;

btn.addEventListener("click",
    () => {
        size = Number(prompt("size"));
    btn.style.visibility = "hidden";
    circleCriate();
    tesst();
    },
    false
);


let tesst = () => {
    container.firstChild.style.backgroundColor = "red";
    all = container.getElementsByTagName('div');
console.log(all.length);
console.log(all[2]);
console.log(container);

/*
container.addEventListener("click",
 (e) => { 
    e.target.style.backgroundColor = "red";
 },
 true
 );


container.addEventListener("click",  (e) => {
    if(!container.onclick) {
    e.target.style.backgroundColor = "red";
} else {
    console.log("fgfgg")
}
}, false);






container.addEventListener("click",
() => {
    for(i = 0; i = all.length; i++) {
        
        all[i].addEventListener("click",
         () => {
                all[i].style.backgroundColor = "red";
            },
         false
        )
    }


   // all[5].style.backgroundColor = "blue"
}, false);

*/

for(i = 0; i = all.length; i++) {
    all[i].addEventListener("click",
     (e) => {
            e.target.backgroundColor = "red";
        },
     false
    )
}

}

//console.log(all);

/*
btn.onclick = () => {
    size = Number(prompt("size"));
    btn.style.visibility = "hidden";
    circleCriate();

    container.firstChild.style.backgroundColor = "red";
    all = container.getElementsByTagName('div');



    let a = document.getElementById("0");
    a.onclick = () => {
        console.log(a);
        a.remove();
    }


    //console.log(all);
    


    container.onclick = () => {
        console.log(all);
        for(i = 0; i < all.length; i++) {
            all[i].click = () => {
                let z = all[i];
            console.log(z);

                z.remove();
            //console.log(all[i]);
            //all.remove();
            }
    
    }
    }
    
    
    container.onclick = () => {
        console.log("hi");
    for(i = 0; i < 100; i++) {
        if(container.all[i].onclick) {
        console.log("15");

            all[i].remove();
        } else {console.log(false)}
    
    }
    }
    circle.onclick = () => {
        container.removeChild(container.lastChild);
    }
    //nthChild(3).style.backgroundColor = "blue";
}
*/
console.log(size);


//let size = 50;
let circleCriate = () => {


let container = document.getElementById("container");

for(i = 0; i < 100; i++) {
let circle = document.createElement("div");

container.appendChild(circle);
circle.id = `${i}`;

circle.style.width = `${size}px`;
circle.style.height = `${size}px`;
circle.style.margin = `10px`;
circle.style.borderRadius = `50%`;
circle.style.backgroundColor = `#555`;
}
}

