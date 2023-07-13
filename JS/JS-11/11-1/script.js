let text = document.forms[0].elements[0];
let btn = document.forms[0].elements[1];


window.addEventListener('beforeunload', (event) => {
    if (text.value == "") {
        return
    } else {
        event.preventDefault();
        event.returnValue = '';
    }

});

btn.addEventListener("click", function () {
    if (text.value == "") {
        return
    } else {
        alert("text saved");
        text.value = "";
    }

})