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

            row.appendChild(square);
        }
        
        squareContainer.appendChild(row);
    }
}

createDivGrid(16, 16);