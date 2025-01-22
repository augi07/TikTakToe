/**  
 * Function to make the next move, assuming the adversary has moved before.
 *
 * @param {number} player - the player number (1 or 2)
 * @param {array} oldGrid - the grid array to be modified
 * @returns {array} the new grid array.
 */

const gd = require('./displayGrid.js');

prevGrid = [ ['' ,'X' ,'X' ],
             ['' ,'X' ,'' ],
             ['' ,'' ,'' ], ];


grid = prevGrid;      // copying the grid
updateGrid = gd.displayGrid(grid);

player = 1;
//player = 2;
if (player === 1) {    // I am the opposite of actualPlayer
    plSymbol = 'X';
    symbol = 'O'};   
if (player === 2) {
    plSymbol = 'O';
    symbol = 'X'};


dangRow = false;
dangCol = false;
dangDiag = false;
// Strategy 1: try to get an empty corner
/*if (grid[0][0] === '') { 
    grid[0][0] = symbol;
} else {
    if (grid[0][2] === '') { 
        grid[0][2] = symbol;
        if (grid[2][0] === '') {
            grid[2][0] = symbol;
        }
        else {
            grid[2][2] = symbol;
        }
    }
}*/

// Find dangerous rows
for (let i = 0; i < 3; i++) {
    if (grid[i][0] === plSymbol && grid[i][1] === '' && grid[i][2] === plSymbol) {
        console.log('danger at row', i + 1, '!');
        grid[i][1] = symbol;
        dangRow = true; 
    }
    if (grid[i][0] === plSymbol && grid[i][1] === plSymbol && grid[i][2] === '') {
        console.log('danger at row', i + 1, '!');
        grid[i][2] = symbol;
        dangRow = true;           
    } 
    if (grid[i][0] === '' && grid[i][1] === plSymbol && grid[i][2] === plSymbol) {
        console.log('danger at row', i + 1, '!');
        grid[i][0] = symbol;
        dangRow = true;           
    } 
}

// Find dangerous columns
for (let j = 0; j < 3; j++) {
    if (grid[0][j] === plSymbol && grid[1][j] === '' && grid[2][j] === plSymbol) {
        console.log('danger at column', j + 1, '!');
        grid[1][j] = symbol;
        dangCol = true;
    }
    if (grid[0][j] === plSymbol && grid[1][j] === plSymbol && grid[2][j] === '') {
        console.log('danger at column', j + 1, '!');
        grid[2][j] = symbol;
        dangCol = true;            
    }
    if (grid[0][j] === '' && grid[1][j] === plSymbol && grid[2][j] === plSymbol) {
        console.log('danger at column', j + 1, '!');
        grid[0][j] = symbol;
        dangCol = true;          
    }    
}

// find dangerous diagonals
{
if (grid[0][0] === plSymbol && grid[1][0] === '' && grid[2][2] === plSymbol) {
    console.log('danger at 1st diagonal!');
    grid[1][1] = symbol;
    dangDiag = true;
}
if (grid[0][0] === plSymbol && grid[1][1] === plSymbol && grid[2][2] === '') {
    console.log('danger at 1st diagonal!');
    grid[2][2] = symbol;
    dangDiag = true;
}
if (grid[0][0] === '' && grid[1][1] === plSymbol && grid[2][2] === plSymbol) {
    console.log('danger at 1st diagonal!');
    grid[0][0] = symbol;
    dangDiag = true;
}

if (grid[0][2] === plSymbol && grid[1][0] === '' && grid[2][0] === plSymbol) {
    console.log('danger at 2nd diagonal!');
    grid[1][1] = symbol;
    dangDiag = true;
}
if (grid[0][2] === plSymbol && grid[1][1] === plSymbol && grid[2][0] === '') {
    console.log('danger at 2nd diagonal!');
    grid[2][0] = symbol;
    dangDiag = true;
}
if (grid[0][2] === '' && grid[1][1] === plSymbol && grid[2][0] === plSymbol) {
    console.log('danger at 2nd diagonal!');
    grid[0][2] = symbol;
    dangDiag = true;
}
}

//console.log(grid);
console.log('Dangerous row?', dangRow);
console.log('Dangerous column?', dangCol);
console.log('Dangerous diagonal?', dangDiag);

updateGrid = gd.displayGrid(grid);


