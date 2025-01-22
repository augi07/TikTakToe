/**  
 * Function to make a move, entering the coordinates of the grid.
 * It checks the validity of the data entered and sets an 'X' on the grid
 * for player 1 and a 'O' for player 2.
 *
 * @format
 * @param {number} player - the player number (1 or 2)
 * @param {array} oldGrid - the grid array to be modified
 * @returns {array} the new grid array.
 */

function move(player, oldGrid) {
    var prompt = require('prompt-sync')();
    grid = oldGrid;              // copy the old grid
    let entry = true;            // initial data entry assumed valid (true)
    do {
        console.log('Player', player,', please make your move: row, column');
        var input = prompt('Rows and columns can only have values of 1, 2 or 3 (0 to Quit): ');
        [a, b] = input.split(',').map(Number);

        if (a === 0) {
            console.log('Quitting the game...\n');        
            process.exit();
        }

        // valid entry?           
        if (a < 1 | a > 3 | b < 1 | b > 3 | isNaN(a) | isNaN(b)) { 
            entry = false;
            console.log('You entered: ', a, b);
            console.log('Not a valid entry. Please try again...\n');
        }
        // assigning player symbols
        else {
            if (grid[a - 1][b - 1] === '' ) {    // checking that the field is empty
                if (player === 1) grid[a - 1][b - 1] = "X"; 
                if (player === 2) grid[a - 1][b - 1] = "O";
                entry = true;
            } else {
                console.log('This field is not empty, please try again...\n');                
                entry = false;
            }
        };
    } while (entry === false);
    //console.log(grid);

    return grid;
}
module.exports = {move};
