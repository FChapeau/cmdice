var dicelist = require("./dice.js");

/**
 * This throws a set of dice for Fantasy Flight's Star Wars RPG.
 * 
 * Takes in parameter an object that needs to have seven properties
 * @param {object} params - Parameters of the dice pool
 * @see {@link dicePool}
 */
function roll (params){
    var output = [];

    for (var key in params){
        if (params.hasOwnProperty(key)){
            for (var i = 0; i < params[key]; i++){
                output = output.concat(dicelist[key]());
            }
        }
    }

    return output;
}

/**
 * This constructs a dice pool object digestable by the roll function.
 * @constructor
 * @param {integer} black - Number of black dice to roll
 * @param {integer} blue - Number of blue dice to roll
 * @param {integer} purple - Number of purple dice to roll
 * @param {integer} green - Number of green dice to roll
 * @param {integer} red - Number of red dice to roll
 * @param {integer} yellow - Number of yellow dice to roll
 * @param {integer} white - Number of white dice to roll
 */
function dicePool(black, blue, purple, green, red, yellow, white) {
    return {
        Black: black,
        Blue: blue,
        Purple: purple,
        Green: green,
        Red: red,
        Yellow: yellow,
        White: white
    }
}

module.exports = {
    Roll: roll,
    DicePool: dicePool
};