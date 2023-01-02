function addBorder(square, i,j,width, height, thickness) {
    if (i === 0) {
        square.style.borderTop = `${thickness}px solid black`;
        if (j === 0) {
            square.style.borderLeft = `${thickness}px solid black`;
        }
        else if (j === width-1) {
            square.style.borderRight = `${thickness}px solid black`;
        }
    }

    if (i === height - 1) {
        square.style.borderBottom = `${thickness}px solid black`;
        if (j === 0) {
            square.style.borderLeft = `${thickness}px solid black`;
        }
        else if (j === width-1) {
            square.style.borderRight = `${thickness}px solid black`;
        }
    }

    if (j === 0 && (i !== 0 || i !== width - 1)) {
        square.style.borderLeft = `${thickness}px solid black`;
    }

    if (j == width -1 && (i !== 0 || i !== width -1)) {
        square.style.borderRight = `${thickness}px solid black`;
    }
}

function createDivGrid(width, height) {
    let squareContainer = document.querySelector(".content > .squares");

    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.style = "display: flex"
        
        for (let j = 0; j< width; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style = "padding: 12px; background-color: white; border: 0; margin: 0;";
            addBorder(square, i, j, width, height, 2);

            addHoverEffect(square);

            row.appendChild(square);
        }
        
        squareContainer.appendChild(row);
    }
}

let mouse_clicking = false;

function addHoverEffect(square) {
    square.addEventListener('mousedown', function(e) {
        this.style.backgroundColor = "black";
        mouse_clicking = true;
    });
    square.addEventListener('mouseup', function(e) {
        this.style.backgroundColor = 'black';
        mouse_clicking = false;
    }); 
    square.addEventListener('mousemove', function(e) {
        if (mouse_clicking) {
            this.style.backgroundColor = "black";
        } 
    }) 
}

function checkValidSize(n, type) {
    console.log(n);
    while ( (n !== null) &&  (typeof Number(n) != 'number' || n <= 0)) {
        n = prompt(`Enter a valid ${type}!`)
    }
    while (n !== null && n > 20) {
        n = prompt(`${type} must be less than 20!`);
    }

    return n;
}

/* Script Code*/

createDivGrid(16, 16);

let changeSizeButton = document.querySelector(".container .changeSize");
changeSizeButton.addEventListener('click', function(e) {
    let w = checkValidSize(prompt("Width: "), 'Width');
    let h = checkValidSize(prompt("Height: "), 'Height');

    let rows = document.querySelectorAll('.row');
    rows.forEach(row => {row.remove()});

    createDivGrid(+w, +h);
})

