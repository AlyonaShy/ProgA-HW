let myBtnOll = document.querySelector("#oll");
let myBtnSort = document.querySelector("#sort");

function createFiels(data) {
    let body = document.querySelector(".body");
    for (j = 0; j < data.length; j++) {

        let contBody = document.createElement("div");
        contBody.className = "body__row";
        body.append(contBody);
        for (i = 0; i < 3; i++) {
            let contColl = document.createElement("div");
            contColl.className = "body__coll"
            contBody.append(contColl);
            if (i == 0) {
                contColl.innerHTML = `${data[j].txt}`
            } else if (i == 1) {
                contColl.innerHTML = `${data[j].cc}`
            } else if (i == 2) {
                contColl.innerHTML = `${data[j].rate}`
            }
        }

    }
}

myBtnSort.addEventListener("click", () => {
    myBtnSort.style.display = "none";
    myBtnOll.style.display = "none";


    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            localStorage.data = JSON.stringify(data);


            for (var i = 0; i < data.length; i++) {
                if (data[i].rate < 25) {
                    data.splice(i, 1);
                    i = i - 1;
                }
            }


            for (var i = 0, tmp; i < data.length - 1; i++) {
                for (var j = 0; j < data.length - 1; j++) {
                    if (data[j].rate > data[j + 1].rate) {

                        tmp = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = tmp;
                    }
                }
            }

            createFiels(data);
        }
    }

    xhr.send();
}

)




myBtnOll.addEventListener("click", () => {
    myBtnOll.style.display = "none";
    myBtnSort.style.display = "none";


    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            localStorage.data = JSON.stringify(data);

            createFiels(data);
        }
    }
    xhr.send();

})

