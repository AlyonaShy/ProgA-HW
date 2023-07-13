function collor(name) {
    let text = document.getElementsByTagName("p");
    for (let i = 0; i < text.length; i++) {
        text[i].style.color = `${name}`;
    }
}




window.addEventListener('keydown', function(event) {
    if (event.code == 'KeyR') {
        collor('red');
    } else if (event.code == 'KeyG') {
        collor('green');
    } else if (event.code == 'KeyB') {
        collor('blue');
    }
  });