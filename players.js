/**
 * Function to determine the number of players.
 * 
 * @format
 * @returns {number} the number of players.
 */

function players() {
   var pl = 0;
   var prompt = require('prompt-sync')();
   while (true) {
      var n = prompt('How many Players? Max. 2 Players (0 to Quit): ');
      if (n === '0') {
         console.log('Quitting the game...\n');    
         process.exit();         
      }
      if (n === '1') {           // number of players is one 
         pl = 1;        
         console.log('\nStarting the game for', pl, 'player');
         break;
      }
      if (n === '2') {           // number of players is two 
         pl = 2;       
         console.log('\nStarting the game for', pl, 'players');     
         break; 
      }
      console.log(n + ' is not a valid option. Try again...\n'); 
   }

   return pl;
}

module.exports = {players};
 