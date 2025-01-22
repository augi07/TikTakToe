/** 
 * @format
 * @description This is the main script of the TikTakToe game. 
 * @author  Augusto Hasenbalg. January 2024.
 * @version 1.0.0
 * @returns {void}
 */

// Importing the needed modules
const plyrs = require('./players.js');
const gd = require('./displayGrid.js');
const mv = require('./move.js');
const ev = require('./evaluate.js');
var prompt = require('prompt-sync')();

while (true) {                   // Starting the game anew 
    // How many players should play
    ply = plyrs.players();                                    

    // Starting the game
    oldGrid = [                  // each grid entry has 3 states: '', 'X', 'O'
        ['' ,'' ,'' ],
        ['' ,'' ,'' ],
        ['' ,'' ,'' ],
    ];
    
    res = gd.displayGrid(oldGrid);   // display the empty grid

    actualPlayer = 1;            // player 1 uses 'X' symbol
    prevPlayer = 2;              // player 2 uses 'O' symbol

    win = false;
    while (win === false) {   
        newGrid = mv.move(actualPlayer, oldGrid);        // Let the player make a move
     
        updateGrid = gd.displayGrid(newGrid);            // Update the grid

        evRes = ev.evaluate(actualPlayer, newGrid);      // Evaluate the grid
        win = evRes[0];
        gameSt = evRes[1];
        //console.log('Win state: ', win, '\t Game status:', gameSt);

        if (win === true) { 
            console.log('Congratulations player', actualPlayer, '!');
            console.log('YOU WON!!! \n');
            break;
        } 

        if (gameSt === 'end') {  
            console.log('Sorry. Nobody won...... :( \n');
            break;        
        }

        temp = actualPlayer;               // swap the players
        actualPlayer = prevPlayer; 
        prevPlayer = temp; 
    }

    ansValid = false;                      // play again logic
    while (ansValid == false) {                                    
        const ans = prompt('Play again (Y/N): ');
        console.log();

        if (ans == 'Y' | ans == 'y') {
            ansValid = true;
        } else {        
            if (ans == 'N' | ans == 'n') {
                console.log('Quitting the game...\n');
                process.exit();
            } else {
                console.log('Answer not valid. Please try again...\n');
                ansValid = false;               
            }
        }
    }
}
