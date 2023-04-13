


const parentdiv = document.querySelector("#parentdiv");



clickBtn = () => {

    if (parentdiv.childNodes.length == 10) {
        while (parentdiv.firstChild) {
            parentdiv.removeChild(parentdiv.firstChild);
        }
    } else {
        n = parentdiv.childNodes.length
        const div = document.createElement("div");
        div.innerHTML = `Новий дів - ${n+1}`;
        parentdiv.appendChild(div);
    }
    //console.log(parentdiv.childNodes.length);
};

