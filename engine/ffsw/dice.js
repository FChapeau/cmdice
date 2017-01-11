var Random = require("random-js");
var Symbols = require("./symbols.js");

module.exports = {
    Blue: blue
}

/**
 * Rolls a blue dice from Fantasy Flight's Star Wars RPG
 * 
 * @returns Array of Symbols, from 0 to 2 members
 */
function blue(){
    var diceResult = Random.integer(0, 6)(Random.engines.browserCrypto)
    var output = []
    
    switch (diceResult) {
        case 0:
            output.push(Symbols.SUCCESS);
            break;
        case 1:
            output.push(Symbols.ADVANTAGE);
            break;
        case 2:
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.SUCCESS);
            break;
        case 3: 
            output.push(Symbols.ADVANTAGE);
            output.push(Symbols.ADVANTAGE);
            break;
    }
    
    return output;
}