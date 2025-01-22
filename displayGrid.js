/**
 * Displays the grid. Produces an output to the console with the
 * actual grid layout.
 * 
 * @format
 * @param {array} - the grid array
 * @returns {void}
 */

function displayGrid(grid) {
    console.clear();
    const sep = '---+---+---';
    var elem = [                 // mapping grid to elem
        [' ' ,' ' ,' ' ],
        [' ' ,' ' ,' ' ],
        [' ' ,' ' ,' ' ],
    ]; 

    console.log(); 
    for (let i = 0; i < 3; i++) {          // looping over rows       
        for (let j = 0; j < 3; j++) {      // looping over columns
            if (grid[i][j] === '') { 
                elem[i][j] = ' ';
            } else {
                elem[i][j] = grid[i][j];
            } 
        }
        console.log(' ' + elem[i][0]  + ' | ' + elem[i][1] + ' | ' + elem[i][2] + ' ');
        if (i < 2) {
            console.log(sep)
        };
    }
    console.log();
    //console.log(grid)
}

module.exports = {displayGrid};
