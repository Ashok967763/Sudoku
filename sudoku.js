function nextEmptyposition(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0)
                return [i,j];
        }
    }
    return [-1,-1];
}

function rowCheck(board, row, value) {
    for (let i = 0; i < board[row].length; i++) {
        if (board[row][i] === value)
            return false;
    }
    return true;
}

function columnCheck(board, column, value) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][column] === value)
            return false
    }
    return true;
}

function squareCheck(board, row, column, value) {
    boxRow = Math.floor(row / 3) * 3;
    boxColumn = Math.floor(column / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[boxRow + i][boxColumn + j] === value)
                return false;
        }
    }
    return true;
}

function checkValue(board, row, column, value) {
    if (rowCheck(board, row, value) && columnCheck(board, column, value) && squareCheck(board, row, column, value))
        return true;
    else
        return false
}

function solveSudoku(board) {
    let emptySpot = nextEmptyposition(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1) {
        return board;
    }

    for (let num = 1; num <= 9; num++) {
        if (checkValue(board, row, col, num)) {
            board[row][col] = num;
            solveSudoku(board);
        }
    }

    if (nextEmptyposition(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}

var board = [
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0]
];

console.log("Solved Board-->",solveSudoku(board));


