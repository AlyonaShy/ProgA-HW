
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.code == 'KeyS') {
        alert("Збережено ВСЕ");
        event.preventDefault();
    } else if (event.ctrlKey && event.code == 'KeyA') {
        alert("Виділено все");
        /*
        var r = document.createRange();
        r.selectNode(this);
        document.getSelection().addRange(r);
        */
        //event.preventDefault();
    } else if (event.ctrlKey && event.code == 'KeyS') {
        alert("save");
        event.preventDefault();
    }
  });

