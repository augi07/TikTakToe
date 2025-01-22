/**
 * Routine to evaluate the grid after a move.
 *
 * @format
 * @param {number} - the player number
 * @param {array} - the grid
 * @returns {array} the win state and game status ('on' or 'end').
 */

function evaluate(player, grid) {
    if (player === 1) symbol = 'X';
    if (player === 2) symbol = 'O';    
    win = false;                 // win status
    gameSt = 'on';               // game status ('on' continue, 'end' end the game)

    // checking that the grid is valid and not full
    let full = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] !== 'X' && grid[i][j] !== 'O' && grid[i][j] !== '') {
                console.log('Warning! Grid invalid at:', i+1, ',', j+1);
            } else {                     
                if (grid[i][j] !== '') { 
                    full++; 
                } 
            }    
        } 
    }
    if (full === 9) { 
        gameSt = 'end';
    } 

    // checking if there are three symbols in a single row
    for (let i = 0; i < 3; i++) {
        if (symbol === grid[i][0] && symbol === grid[i][1] && symbol === grid[i][2] ) {
            //console.log('Win on row:', i + 1);
            win = true; 
        }
    }

    // cheking if there are three symbols in a single column
    for (let j = 0; j < 3; j++) {
        if (symbol === grid[0][j] && symbol === grid[1][j] && symbol === grid[2][j] ) {
            //console.log('Win on column:', j + 1);
            win = true;
        }        
    }

    // checking if there are three symbols in a diagonal
    if (symbol === grid[0][0] && symbol === grid[1][1] && symbol === grid[2][2] ) {
        //console.log('Win on first diagonal');
        win = true; 
    }
    if (symbol === grid[0][2] && symbol === grid[1][1] && symbol === grid[2][0] ) {
        //console.log('Win on second diagonal');
        win = true; 
    }

    return [win, gameSt];
    //return win, gameSt;    
}

module.exports = {evaluate};
