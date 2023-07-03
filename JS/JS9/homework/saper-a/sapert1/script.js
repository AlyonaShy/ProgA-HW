startGame(8, 8, 5);

let mineimg = `<img src="./img/mine.jpg" alt="mine">`;
let flagimg = `<img src="./img/flag.png" alt="mine">`;

function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
    const field = document.querySelector('.field');
    const cellsCount = WIDTH * HEIGHT;
    field.innerHTML = '<button></button>'.repeat(cellsCount);
    const cells = [...field.children];

    const bombs = [...Array(cellsCount).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, BOMBS_COUNT);

    field.addEventListener('click', (event) => {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        const index = cells.indexOf(event.target);
        console.log(event.target);
        const collumn = index % WIDTH;
        const row = Math.floor(index / WIDTH);
        open(row, collumn);
    });


    field.oncontextmenu = function()
{
  //alert('Правая кнопка');
  return false;
  
};


    field.addEventListener('contextmenu', (event) => {
        if(event.target.tagName !== 'BUTTON') {
            return;
        }
        if(event.target.disabled !== true) {
             event.target.innerHTML = flagimg;
        } else {
            event.target.innerHTML = '';
        }
       
    });

    function isValid(row, collumn) {
        return row >= 0
        && row < HEIGHT
        && collumn >= 0
        && collumn < WIDTH;
    }

    function getCount(row, collumn) {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
            for(let y = -1; y <= 1; y++) {
                if (isBomb(row + y, collumn + x)){
                    count++;
                }
            }
        }
        return count;
    }


    function open(row, collumn) {
        if(!isValid(row, collumn)) return;

        const index = row * WIDTH + collumn;
        const cell = cells[index];

        if(cell.disabled === true) return;

        cell.disabled = true;
        if(isBomb(row, collumn)){
            cell.innerHTML = mineimg;
            alert('ти програв!');
            return;
            
        }

        const count = getCount(row, collumn);

        if (count !== 0) {
            cell.innerHTML = count;
        return;
        }
        for (let x = -1; x <= 1; x++) {
            for(let y = -1; y <= 1; y++) {
                open(row + y, collumn + x);
            }
        }
    
        
    }


    function isBomb(row, collumn) {
        if (!isValid(row, collumn)) return false;

        const index = row * WIDTH + collumn;

        return bombs.includes(index);
    }
}

